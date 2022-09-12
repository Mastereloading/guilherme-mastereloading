import styled from 'styled-components'

export const Container = styled.div`
    .headerwithoutbg {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 20rem;
        position: fixed;
        width: 100%;
        height: 90px;
        z-index: 10
    };
    .headerwithbg {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 20rem;
        position: fixed;
        width: 100%;
        height: 90px;
        z-index: 10;
        background-color: rgba(8, 8, 8, 0.9);
        transition: 0.6s
    };
    .listoff {
        display: flex
    };
    .liston {
        display: flex
    };
    li {
        padding: 0 1rem
    };
    .link {
        font-size: 1.2rem;
        font-weight: 500;
    };
    .hamburger {
        display: none
    };
    @media screen and (max-width: 1240px) {
        .headerwithoutbg {
            padding: 0.5rem 1rem
        };
        .headerwithbg {
            padding: 0.5rem 1rem
        };
        .listoff {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            background: rgba(8, 8, 8, 0.9);
            position: absolute;
            top: 0;
            left: -100%;
            z-index: -3px;
            transition: 0.3s
        };
        .liston {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            background: rgba(8, 8, 8, 0.9);
            position: absolute;
            top: 0;
            left: 0;
            z-index: -3px;
            transition: 0.3s
        };
        li {
            padding: 1rem 0
        };
        .link {
            font-size: 2rem
        };
        .hamburger {
            padding: 2rem;
            position: absolute;
            top: 0;
            right: 0;
            display: initial
        }
    }
`
