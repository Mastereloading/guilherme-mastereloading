import styled from 'styled-components'
import colors from '../../styles/colors'
// animation: typing 1.375s steps(16), blinking 0.875s infinite step-end alternate;

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
            border-right: 1.125rem solid;
            padding: 0 0.5rem 0 1.625rem;
            width: 18ch;
            white-space: nowrap;
            overflow: hidden;
            visibility: hidden;
            animation: namehidden 1s, typing 1.375s steps(18) 1s, blinking 0.875s infinite 2s step-end alternate;
            animation-fill-mode: forwards;
        };
        p {
            font-size: 1.75rem;
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
    @keyframes namehidden {
        99% {
            visibility: hidden;
        }
        100% {
            visibility: visible;
        }
    }
    @keyframes typing {
        from {
            width: 0;
        };
        to {
            width: 100%;
        };
    };
    @keyframes blinking {
        50% {
            border-color: transparent;
        };
    };
    @media screen and (max-width: 640px) {
        .content {
            h1 {
                font-size: 3.5rem;
                width: 8ch;
                border-right: 0;
                margin-left: 0px;
                white-space: normal;
                overflow: visible;
                animation: none;
                visibility: visible;
                padding: 0;
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
