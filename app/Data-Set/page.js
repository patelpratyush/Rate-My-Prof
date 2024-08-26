"use client";

import { Box, Typography, Card, CardContent, Rating } from "@mui/material";
import { React, useState, useEffect } from "react";

const DataSet = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data.reviews));
  }, []);

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ marginBottom: 4, color: "#333" }}
      >
        Professor Reviews
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {reviews.map((review, index) => (
          <Card key={index} sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {review.professor}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {review.subject}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, marginBottom: 2 }}>
                {review.review}
              </Typography>
              <Rating
                name="read-only"
                value={review.stars}
                readOnly
                precision={0.5}
                size="small"
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default DataSet;
