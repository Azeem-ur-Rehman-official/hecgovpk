"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";

const CardsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;
  const visibleSlides = 5;

  const cards = [
    {
      url: "/assets/scholarship.png",
      title: "Degree Equivalence",
      content: "HEC has launched online...",
      clr: "#adbc3b",
    },
    {
      url: "/assets/university.png",
      title: "Scholarships",
      content: "Scholarships, fundings...​​",
      clr: "#E6864B",
    },
    {
      url: "/assets/initiative.png",
      title: "University Information",
      content: "Accredited institutions...​​",
      clr: "#C85D3A",
    },
    {
      url: "/assets/policy.png",
      title: "R & D Initiatives",
      content: "Research Grants, Centre...​",
      clr: "#349c7d",
    },
    {
      url: "/assets/university.png",
      title: "Policy & Procedures",
      content: "Faculty Appointment,...​​",
      clr: "#E6864B",
    },
    {
      url: "/assets/degree.png",
      title: "Accreditation",
      content:
        "Accreditation Criteria, Recogn...",
      clr: "#66CDAA",
    },
    {
      url: "/assets/scholarship.png",
      title: "Ph.D. Country Directory",
      content: "Online System (PCD-OS)...",
      clr: "#adbc3b",
    },
    {
      url: "/assets/scholarship.png",
      title: "Education Testing Council",
      content:
        "Education Testing Council...",
      clr: "#E5B24C",
    },
    {
      url: "/assets/scholarship.png",
      title: "Study in Pakistan",
      content:
        "Students are coming from...",
      clr: "#E6864B",
    },
  ];
  const handlePrevClick = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - visibleSlides : prev - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) =>
      prev === totalSlides - visibleSlides ? 0 : prev + 1
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
       
      }}
    >
      <Box sx={{ display: "flex", overflow: "hidden",  }}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={12} xs={12}>
            <Card
              sx={{
                margin: "0 6px",
                backgroundColor: `#E5B24C`,
              }}
            >
              <CardContent sx={{ padding: "20px 20px 0px 20px", display:"flex",flexDirection:"row",gap:2 }}>
              <Box><img src="/assets/degree.png" alt="s" /></Box>
                
                <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#ffffff"
                  fontSize="14px"
                >
                  Degree Attestation
                </Typography>
                <Typography variant="body2" color="#e1ffe1cc" fontSize="12px" mt={2}>
                  Requirements for Attestation, attestation via courier etc.
                </Typography>
                </Box>
               
              </CardContent>
            
            </Card>
          </Grid>
          {cards.map((card, index) => (
            <Grid item sm={6} md={6} xs={6}>
            <Card
              key={index}
              sx={{
                flex: "0 0 18%",
                margin: "0 6px",
                backgroundColor: `${card.clr}`,
              }}
            >
              <CardContent sx={{ padding: "10px 10px 0px 10px",display:"flex",flexDirection:"row",gap:2 }}>
                
                <Box><img  src={card.url} alt="s" /></Box>
                <Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#ffffff"
                  fontSize="14px"
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" color="#e1ffe1cc" fontSize="12px" mt={2}>
                  {card.content}
                </Typography>
                </Box>
                
              </CardContent>
             
            </Card>
            </Grid>
            
          ))}
        </Grid>
        
      </Box>
    </Container>
  );
};

export default CardsComponent;
