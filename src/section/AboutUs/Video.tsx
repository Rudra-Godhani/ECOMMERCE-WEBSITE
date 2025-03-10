import { Box } from "@mui/material";
import React from "react";
import { video } from "../../assets";

const Video: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: { xs: "80px 30px", sm: "122px 50px" },
                width: "100%",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "1000px",
                    aspectRatio: "16/9",
                    borderRadius: "20px",
                    overflow: "hidden",
                }}
            >
                <video
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    controls
                    autoPlay
                    muted
                    loop
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>
        </Box>
    );
};

export default Video;
