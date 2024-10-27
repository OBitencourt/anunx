
import styled from 'styled-components'

export const Dropzone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 150px;
    border: 2px dashed black;
    padding: 10px;
    margin: 15px 15px 15px 0;
    cursor: pointer;  
    

`

export const Thumb = styled.div`
    width: 200px;
    height: 150px;
    margin: 15px 15px 15px 0;
    background-color: black;
    background-size: cover;
    background-position: center center;
    flex-wrap: wrap;
    position: relative;

    &:hover .mask{
        display: flex;
    }

    .mask {
        display: none;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgba(0,0,0,0.7);
        height: 100%;
        width: 100%;

    }

    .mainImage {
        background-color: blue;
        width: 40%;
        position: absolute;
        bottom: 0;
        padding-left: 5px;
        border-top-right-radius: 7px;
    }
`