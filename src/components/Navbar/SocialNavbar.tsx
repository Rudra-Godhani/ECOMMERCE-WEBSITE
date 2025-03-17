import { Box, styled, Toolbar } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const SocialNavbar: React.FC = () => {
  const StyledToolebar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    color: "#ffffff",
    padding: "0.55rem 1.5rem",
  })
  const Icons = styled(Box)({
    display: 'flex',
    gap: '6px',
  });
  const Wrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  });
  const Text = styled("h6")({
    fontSize: "12px"
  })

  return (
      <Box
          sx={{
              backgroundColor: "#252B42",
              color: "#ffffff",
              display: { xs: "none", md: "block" },
          }}
      >
          <StyledToolebar>
              <Wrapper sx={{ gap: "8px" }}>
                  <Wrapper sx={{ gap: "5px", padding: "10px" }}>
                      <CallIcon
                          sx={{
                              color: "#ffffff",
                              fontSize: "14px",
                              "&:hover": {
                                  color: "#23A6F0",
                                  cursor: "pointer",
                              },
                          }}
                      />
                      <Text>1800 200220</Text>
                  </Wrapper>
                  <Wrapper sx={{ gap: "5px", padding: "10px" }}>
                      <MailOutlineIcon
                          sx={{
                              color: "#ffffff",
                              fontSize: "14px",
                              "&:hover": {
                                  color: "#23A6F0",
                                  cursor: "pointer",
                              },
                          }}
                      />
                      <Text>primepicks.shop@pp.com</Text>
                  </Wrapper>
              </Wrapper>

              <Wrapper>
                  <Text sx={{ padding: "8px" }}>
                      Follow Us and get a chance to win 80% off
                  </Text>
              </Wrapper>

              <Wrapper sx={{ gap: "8px", padding: "8px" }}>
                  <Text>Follow Us :</Text>
                  <Icons>
                      <InstagramIcon
                          sx={{
                              color: "#ffffff",
                              "&:hover": {
                                  color: "#23A6F0",
                                  cursor: "pointer",
                              },
                          }}
                      />
                      <YouTubeIcon
                          sx={{
                              color: "#ffffff",
                              "&:hover": {
                                  color: "#23A6F0",
                                  cursor: "pointer",
                              },
                          }}
                      />
                      <FacebookIcon
                          sx={{
                              color: "#ffffff",
                              "&:hover": {
                                  color: "#23A6F0",
                                  cursor: "pointer",
                              },
                          }}
                      />
                      <TwitterIcon
                          sx={{
                              color: "#ffffff",
                              "&:hover": {
                                  color: "#23A6F0",
                                  cursor: "pointer",
                              },
                          }}
                      />
                  </Icons>
              </Wrapper>
          </StyledToolebar>
      </Box>
  );
}

export default SocialNavbar