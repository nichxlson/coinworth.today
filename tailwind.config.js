module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,
    theme: {
        container: {
            screens: {
                DEFAULT: '100%',
                xs: '380px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1200px',
            },
        },
    }
}
