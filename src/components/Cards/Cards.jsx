import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase";
import {
  CardSectionWrapper,
  Card,
} from './ChatBox.styled';

const Cards = () => {
  const [points, setPoints] = useState([]);

  await addDoc(collection(db, "points"), {
    points: points,
    name: displayName,
    createdAt: serverTimestamp(),
  });

  useEffect(() => {
    const q = query(
      collection(db, "points"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedPoints = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
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
        {cards.map((card) => {
            console.log('lii ', card);
          return <Card key={card} cardNumber={card} />
        })}
    </CardSectionWrapper>
  );
};

export default Cards;
