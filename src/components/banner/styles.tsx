import styled from 'styled-components'
import colors from '../../styles/colors'

export const BannerContainer = styled.div`
    height: 100%;
    width: 100%;
    .content {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        text-align: center;
        h1 {
            color: ${colors.primary};
            text-shadow: 3px 3px #080808;
            font-size: 4.5rem;
            margin-left: 1.125rem;
            border-right: 1.125rem solid;
            width: 16ch;
            white-space: nowrap;
            overflow: hidden;     
            animation: typing 1.375s steps(16), blinking 0.875s infinite step-end alternate;
        };
        p {
            font-size: 1.5rem;
        };
        .p2 {
            font-size: 1.5rem;
            padding: 0 0 4rem 0;
        };
        .button-light {
            margin: 1rem 0.5rem
        };
        .button-dark {
            margin: 1rem 0.5rem
        };
        .buttons {
            display: flex;
            justify-content: center
        }
    };
    @media screen and (max-width: 640px) {
        .content {
            h1 {
                font-size: 3.5rem;
                width: 8ch;
                border-right: 0;
                margin-left: 0;
                white-space: normal;
                overflow: visible;
                animation: none;
            };
            p1 {
                font-size: 1.3rem
            };
            .p2 {
                font-size: 1.3rem
            };
            .buttons {
                display: flex;
                justify-content: center;
                flex-direction: column;
            };
            .button-light {
                margin: 0.5rem 3rem
            };
            .button-dark {
                margin: 0.5rem 3rem
            };
        };
    };
    @keyframes typing {
        from {
            width: 0;
        };
    };
    @keyframes blinking {
        50% {
            border-color: transparent;
        };
    };
`

export const MaskBanner = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000000;
        opacity: 0.8;
    };
    .imagebanner {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: cover;
        object-fit: cover
    }
`
