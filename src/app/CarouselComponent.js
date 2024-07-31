"use client";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;
  const visibleSlides = 5;
  
  const cards = [
    {
      url:"/assets/degree.png",
      title: "Degree Attestation",
      content: "Requirements for Attestation, attestation via courier etc.",
      clr:"#E5B24C",
    },
    {
      url:"/assets/scholarship.png",
      title: "Degree Equivalence",
      content: "HEC has launched online portal for equivalence of degrees",
      clr:"#adbc3b",
    },
    {
      url:"/assets/university.png",
      title: "Scholarships",
      content: "Scholarships, fundings, application process etc.​​",
      clr:"#E6864B",
    },
    {
      url:"/assets/initiative.png",
      title: "University Information",
      content: "Accredited institutions, illegal, university ranking etc.​​",
      clr:"#C85D3A",
    },
    {
      url:"/assets/policy.png",
      title: "R & D Initiatives",
      content: "Research Grants, Centre of Excellence, Upcoming journals etc.​",
      clr:"#349c7d",

    },
    {
      url:"/assets/university.png",
      title: "Policy & Procedures",
      content: "Faculty Appointment, Undergraduate Education, Tenure...​​",
      clr:"#E6864B",
    },
    {
      url:"/assets/degree.png",
      title: "Accreditation",
      content: "Accreditation Criteria, Recognized Institutions, Fake, Illegal and...",
      clr:"#66CDAA",
    },
    {
      url:"/assets/scholarship.png",
      title: "Ph.D. Country Directory",
      content: "Online System (PCD-OS) Ph.D. Country Directory",
      clr:"#adbc3b",
    },
    {
      url:"/assets/scholarship.png",
      title: "Education Testing Council",
      content: "Education Testing Council (ETC) under which it will hold standardized entry tests",
      clr:"#E5B24C",
    },
    {
      url:"/assets/scholarship.png",
      title: "Study in Pakistan",
      content: "Students are coming from all over the world to study in Pakistan.",
      clr:"#E6864B",
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
    <Box
    
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
       
      }}
    >
      <IconButton onClick={handlePrevClick}>
        <ArrowBackIos sx={{color:"#ffffff"}} />
      </IconButton>
      <Box sx={{ display: "flex", overflow: "hidden", width: "80%" }}>
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${currentSlide * 20}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              sx={{
                flex: "0 0 18%",
                margin: "0 6px",
                backgroundColor: `${card.clr}`,
              }}
            >
              <CardContent sx={{ padding: "20px 20px 0px 20px" }}>
                <img src={card.url} alt="s" />
                <Typography variant="body1" fontWeight="bold" color="#ffffff" fontSize="16px">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="#e1ffe1cc" fontSize="12px">{card.content}</Typography>
              </CardContent>
              <Typography component={Link} href="#" sx={{textDecoration:"none", color:"#000000"}} className="cardDetail"fontSize="12px" variant="body2" mt={1} >See Details</Typography>
            </Card>
          ))}
        </Box>
      </Box>
      <IconButton onClick={handleNextClick}>
        <ArrowForwardIos sx={{color:"#ffffff"}}/>
      </IconButton>
    </Box>
  );
};

export default CarouselComponent;
