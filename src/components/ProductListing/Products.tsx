import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import React from 'react'
import FilteredProducts from './FilteredProducts'
import Filters from './Filters'

const Products: React.FC = () => {
    return (
        <Box sx={{ py: "48px" }} maxWidth={"1100px"} mx={"auto"}>
            <Grid container>
                <Grid item sx={{ flexBasis: "30%", flexGrow: 0, maxWidth: "30%", display: { xs: "none", md: "block" } }}>
                    <Filters />
                </Grid>
                <Grid item sx={{
                    flexBasis: { xs: "100%", md: "70%" }, flexGrow: 1, maxWidth: { xs: "100%", md: "70%" }
                }}>
                    <FilteredProducts />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Products
