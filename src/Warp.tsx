import { Box, Text } from 'ink'
import React from 'react'

const Warp = () => {
    return (
        <>
            <Box width={7}>
                <Text>Hello World</Text>
            </Box>


            <Box width={7}>
                <Text wrap="hard">Hello World</Text>
            </Box>


            <Box width={7}>
                <Text wrap="truncate">Hello World</Text>
            </Box>


            <Box width={7}>
                <Text wrap="truncate-middle">Hello World</Text>
            </Box>


            <Box width={7}>
                <Text wrap="truncate-start">Hello World</Text>
            </Box>

        </>
    )
}

export default Warp