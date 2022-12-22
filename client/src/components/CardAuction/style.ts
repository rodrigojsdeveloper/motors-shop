import styled from "styled-components";

const Container = styled.div`

    color: #FDFDFD;
    
    width: 735px;
    height: 388px;

    border-radius: 4px;
    position: relative;

    margin: 0 15px;

    .divCardDescription {
        
        height: 326px;

        & > img {
            width: 735px;
            height: 326px;
            object-fit: cover;

            background-color: #E9ECEF;
        }

        .divDescription {
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
        
            width: 100%;
            height: 326px;
            position: absolute;
            top: 0;

            background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 25px 40px;

            .divTimeAuction {

                background: #FFFFFF;
                border-radius: 32px;
                padding: 5px;
                width: 123px;
                height: 36px;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;

                time {
                    font-weight: 500;
                    font-size: 16px;
                    color: #212529;
                }
            }

            & > div {

                width: 100%;
                height: 177px;

                h4 {
                    font-weight: 600;
                    font-size: 20px;

                    padding-bottom: 25px;
                }
                
                & > p {
                    font-weight: 400;
                    font-size: 16px;
                    color: #CED4DA;

                    padding-bottom: 28px;
                }

                div {
                    display: flex;
                    flex-direction: row;
                    padding-bottom: 28px;

                    img {
                        width: 32px;
                        height: 32px;
                        border-radius: 150px;
                    }

                    h6 {
                        font-weight: 500;
                        font-size: 14px;
                        margin-left: 8px;
                    }
                    
                    div {
                        width: 113px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        
                        & > p {
                            font-weight: 500;
                            font-size: 14px;
                            color: #4529E6;
                            
                            background: #EDEAFD;
                            border-radius: 4px;
                            padding: 4px 8px;
                        }
                    }

                    span {
                        font-weight: 500;
                        font-size: 16px;
                    }
                }

                .divYearKMPrice {
                    justify-content: space-between;
                }

                .divUser {
                    align-items: center;
                }
            }
        }
    }

    .divRedirectsToAuction {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        background: #4529E6;
        height: 62px;
        padding: 24px 36px;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;

        p {
            font-weight: 600;
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        
        width: 328px;
        height: 435px;

        margin: 0 0 0 8px;

        .divCardDescription {

            height: 435px;
            
            & > img {
                width: 328px;
                height: 435px;

                object-fit: contain;
            }

            .divDescription {
                padding: 20px 15px;
                height: 435px;
                justify-content: unset;

                .divTimeAuction {
                    margin-bottom: 60px;
                }                

                & > div {
                    
                    .divYearKMPrice {
                        flex-direction: column;
                    }
                }
            }
        }

        .divRedirectsToAuction {
            padding: 20px;
        }
    }
`

export { Container }
