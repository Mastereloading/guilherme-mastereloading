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
            padding: 1.5rem;
        };
        p {
            font-size: 1.4rem;
            font-weight: 200;
        };
        .p2 {
            font-size: 1.4rem;
            font-weight: 200;
            padding: 0em 0 4rem;
        };
        .button-light {
            margin: 1rem 0.5rem
        };
        .button-dark {
            margin: 1rem 0.5rem
        }
    };
    @media screen and (max-width: 640px) {
        .content {
            h1 {
                font-size: 3.5rem
            };
            p1 {
                font-size: 1.3rem
            };
            .p2 {
                font-size: 1.3rem
            }
        }
    }
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
