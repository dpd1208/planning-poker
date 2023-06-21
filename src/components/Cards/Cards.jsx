import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import {
  CardSectionWrapper,
  Card,
} from './Cards.styled';

const Cards = ({ cards }) => {
  console.log('liii ', cards);
  const [points, setPoints] = useState([]);

  const sendPoints = async (event) => {
    event.preventDefault();
    if (points.trim() === "") {
      alert("Enter points");
      return;
    }
    const { displayName } = auth.currentUser;
    await addDoc(collection(db, "points"), {
        points: points,
        name: displayName,
        createdAt: serverTimestamp(),
    });
    setPoints("");
  };

  useEffect(() => {
    const q = query(
      collection(db, "points"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedPoints = [];
      QuerySnapshot.forEach((doc) => {
        fetchedPoints.push({ ...doc.data(), id: doc.id });
      });
      const sortedPoints = fetchedPoints.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setPoints(sortedPoints);
    });
    return () => unsubscribe;
  }, []);

  return (
    <CardSectionWrapper className="cards">
      {cards?.map((card) => (
          <Card>{card}</Card>
      ))}
    </CardSectionWrapper>
  );
};

Cards.propTypes = {
  className: PropTypes.string
};

Cards.defaultProps = {
  className: null,
};


export default Cards;
