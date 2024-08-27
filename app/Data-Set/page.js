"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Rating,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const DataSet = () => {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);
  const [teacherData, setTeacherData] = useState({
    professor: "",
    subject: "",
    stars: 0,
    review: "",
  });

  useEffect(() => {
    // Fetch initial data from reviews.json
    fetch("/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data.reviews));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Add the new review to the existing reviews array
    setReviews((prevReviews) => [
      ...prevReviews,
      {
        professor: teacherData.professor,
        subject: teacherData.subject,
        stars: parseFloat(teacherData.stars),
        review: teacherData.review,
      },
    ]);
    setOpen(false);
    // Reset the form
    setTeacherData({
      professor: "",
      subject: "",
      stars: 0,
      review: "",
    });
  };

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

      {/* Add Teacher Button */}
      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add Teacher
        </Button>
      </Box>

      {/* Dialog for adding a new teacher */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add a New Teacher</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="professor"
            label="Professor Name"
            type="text"
            fullWidth
            value={teacherData.professor}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="subject"
            label="Subject"
            type="text"
            fullWidth
            value={teacherData.subject}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="stars"
            label="Rating (0-5)"
            type="number"
            inputProps={{ step: "0.5", min: "0", max: "5" }}
            fullWidth
            value={teacherData.stars}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="review"
            label="Review"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={teacherData.review}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataSet;
