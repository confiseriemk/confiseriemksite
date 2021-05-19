import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 20% auto;
    grid-template-rows: 80px auto;
    grid-template-areas:
        'HD HD'
        'CT CT';
    height: 100vh;
`