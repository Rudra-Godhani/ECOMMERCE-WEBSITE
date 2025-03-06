// import { Box, Button, Card, Container, Grid, Grid2, Stack, Typography } from '@mui/material'
// import React from 'react'
// import edit1 from "../../assets/images/Banner/edi-1.svg";
// import edit2 from "../../assets/images/Banner/edi-2.svg";
// import edit3 from "../../assets/images/Banner/edi-3.svg";
// import edit4 from "../../assets/images/Banner/edi-4.svg";

// const Banner = () => {
//     return (
//         <Box sx={{ backgroundColor: "#FAFAFA" }}>
//             <Container maxWidth="lg" sx={{ p: "80px 0px", textAlign: "center", backgroundColor: "red" }}>
//                 <Stack gap={"10px"} pb={"48px"}>
//                     <Typography variant='h3' fontSize={"24px"} fontWeight={"700"}>
//                         EDITOR’S PICK
//                     </Typography>
//                     <Typography variant='body2' color='gray'>
//                         Problems trying to resolve the conflict between
//                     </Typography>
//                 </Stack>
//                 <Box>
//                     <Grid container columnSpacing={3.75} sx={{ height: "500px", width: "100%",backgroundColor:"blue" }} >
//                         <Grid item xs={12} sm={12} md={4} sx={{backgroundColor: "yellow", height: "500px", width: "100%"}}>
//                             <Box position={"relative"} width="100%" height="500px">
//                                 <img src={edit1} alt="edi1" style={{ width: "100%", height: "100%" }}></img>
//                                 <Box sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 66px", backgroundColor: "#ffffff", color: "#252B42" }}>
//                                     <Typography>
//                                         MEN
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} sm={12} md={4}>
//                             <Box position={"relative"} width="100%">
//                                 <img src={edit2} alt="edi1" style={{ width: "100%", height: "100%" }}></img>
//                                 <Box sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 33px", backgroundColor: "#ffffff", color: "#252B42" }}>
//                                     <Typography>
//                                         WOMEN
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} sm={12} md={4} rowSpacing={4} sx={{}}>
//                             <Grid item>
//                                 <Box position={"relative"} width="100%">
//                                     <img src={edit3} alt="edi1" style={{ width: "100%", height: "100%" }}></img>
//                                     <Box sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 26px", backgroundColor: "#ffffff", color: "#252B42" }}>
//                                         <Typography>
//                                             ACCESSORIES
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                             </Grid>
//                             <Grid item>
//                                 <Box position={"relative"} width="100%">
//                                     <img src={edit4} alt="edi1" style={{ width: "100%", height: "100%" }}></img>
//                                     <Box sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 40px", backgroundColor: "#ffffff", color: "#252B42" }}>
//                                         <Typography>
//                                             KIDS
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Container >
//         </Box >
//     )
// }

// export default Banner



// import { Box, Button, Card, Container, Grid, Grid2, Stack, Typography } from '@mui/material'
// import React from 'react'
// import edit1 from "../../assets/images/Banner/edi-1.svg";
// import edit2 from "../../assets/images/Banner/edi-2.svg";
// import edit3 from "../../assets/images/Banner/edi-3.svg";
// import edit4 from "../../assets/images/Banner/edi-4.svg";

// const Banner = () => {
//   return (
//     <Box sx={{ backgroundColor: "red" }}>
//       <Box sx={{ backgroundColor: "yellow", p: "80px 0",maxWidth: "1050px",mx: "auto" }}>
//         <Stack sx={{ textAlign: "center", pb: "48px" }}>
//           <Typography variant='h3' color="secondary" fontWeight={"700"} fontSize={"24px"}>
//             EDITOR’S PICK
//           </Typography>
//           <Typography variant='body2' color="gray" fontWeight={"400"}>
//             Problems trying to resolve the conflict between
//           </Typography>
//         </Stack>

//         <Box sx={{ backgroundColor: "aqua" }}>
//           <Grid container width={"100%"} height={"500px"} columnGap={3.75}>
//             <Grid item>
//               <Box width={"100%"}>
//                 <Box position={"relative"} width={"100%"}>
//                   <img src={edit1} alt="edit1" />
//                   <Typography sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 66px", backgroundColor: "#ffffff", color: "#252B42" }}>MEN</Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             <Grid item>
//               <Box position={"relative"} width={"100%"}>
//                 <img src={edit2} alt="edit1" />
//                 <Typography sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 33px", backgroundColor: "#ffffff", color: "#252B42" }}>WOMEN</Typography>
//               </Box>
//             </Grid>

//             <Grid item>
//               <Box>
//                 <Grid item position={"relative"} marginBottom={"10px"}>
//                   <img src={edit3} alt="edit1" />
//                   <Typography sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 26px", backgroundColor: "#ffffff", color: "#252B42" }}>ACCESSORIES</Typography>
//                 </Grid>
//                 <Grid item position={"relative"} width={"100%"}>
//                   <img src={edit4} alt="edit1" />
//                   <Typography sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 40px", backgroundColor: "#ffffff", color: "#252B42" }}>KIDS</Typography>
//                 </Grid>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box >
//     </Box >
//   )
// }

// export default Banner




import { Box,Stack, Typography } from '@mui/material'
import edit1 from "../../assets/images/Banner/edi-1.svg";
import edit2 from "../../assets/images/Banner/edi-2.svg";
import edit3 from "../../assets/images/Banner/edi-3.svg";
import edit4 from "../../assets/images/Banner/edi-4.svg";

const Banner: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#FAFAFA" }}>
      <Box sx={{ p: "80px 0", maxWidth: "1050px", mx: "auto" }}>
        <Stack sx={{ textAlign: "center", pb: "48px", px: { xs: "45px", sm: "0px" } }} spacing={1.25}>
          <Typography variant='h3' color="secondary" fontWeight={"700"}>
            EDITOR’S PICK
          </Typography>
          <Typography variant='h6' color="gray" fontWeight={"400"}>
            Problems trying to resolve the conflict between
          </Typography>
        </Stack>

        <Box sx={{ p: { xs: "0px 40px", sm: "0px" } }}>
          <Box sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(auto-fit, minmax(180px, 1fr))",
            },
            rowGap: "16px",
            columnGap: "30px",
          }}>
            <Box position={"relative"} width={"100%"} overflow={"hidden"} sx={{ gridColumn: { xs: "span 1", sm: "span 1", md: "span 2" }, height: { xs: "500px", sm: "auto" } }}>
              <img src={edit1} alt="edit1" width="100%" height="100%" style={{ objectFit: "cover" }} />
              <Typography sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 60px", backgroundColor: "#ffffff", color: "#252B42" }}>MEN</Typography>
            </Box>

            <Box position={"relative"} width={"100%"} overflow={"hidden"} sx={{ height: { xs: "auto", sm: "auto" }, height: { xs: "500px", sm: "auto" } }}>
              <img src={edit2} alt="edit1" width="100%" height="100%" style={{ objectFit: "cover" }} />
              <Typography sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 33px", backgroundColor: "#ffffff", color: "#252B42" }}>WOMEN</Typography>
            </Box>

            <Box display={"grid"} gap={"16px"} sx={{ gridTemplateColumns: { xs: "1fr", md: "auto" } }}>
              <Box position={"relative"} width={"100%"} overflow={"hidden"} sx={{ height: { xs: "250px", sm: "auto" } }}>
                <img src={edit3} alt="edit1" width="100%" height="100%" style={{ objectFit: "cover" }} />
                <Typography sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 26px", backgroundColor: "#ffffff", color: "#252B42" }}>ACCESSORIES</Typography>
              </Box>
              <Box position={"relative"} width={"100%"} sx={{ height: { xs: "250px", sm: "auto" } }}>
                <img src={edit4} alt="edit1" width="100%" height="100%" style={{ objectFit: "cover" }} />
                <Typography sx={{ position: "absolute", bottom: 25, left: 30, p: "12px 40px", backgroundColor: "#ffffff", color: "#252B42" }}>KIDS</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box >
    </Box >
  )
}

export default Banner










