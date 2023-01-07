import styled from "styled-components"

const Container = styled.div`

    width: 100%;
    max-width: 1230px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: -525px;

    .divCarDetailsDescription {

        height: 870px;

        width: 100%;
        max-width: 751px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .divCarPhotoAndDetails {

            width: 100%;
            max-width: 751px;
            height: 610px;
            
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .divCarPhoto {
               
                width: 100%;
                max-width: 752px;
                height: 355px;
                
                background: #FDFDFD;
                border-radius: 4px;

                display: flex;
                justify-content: center;
                align-items: center;

                padding: 20px;

                & > img {
                    width: 100%;
                    max-width: 441px;
                    height: 252.96px;
                    
                    object-fit: contain;
                }

                @media (max-width: 720px) {

                    margin-bottom: 5px;
                }
            }

            .divCarDetails {

                width: 100%;
                max-width: 752px;
                
                padding: 28px 44px;
                background: #FDFDFD;
                border-radius: 4px;

                margin-top: 10px;
                
                & > h3 {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 25px;
                    
                    color: #212529;

                    margin-bottom: 55px;
                }

                & > div {

                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    margin-bottom: 30px;

                    & > div {
                        width: 100%;
                        max-width: 113px;
                        
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        
                        & > p {

                            width: 50px;
                            height: 32px;

                            padding: 4px 8px;
                            background: #EDEAFD;
                            border-radius: 4px;

                            font-weight: 500;
                            font-size: 14px;
                            line-height: 24px;
                            color: #4529E6;
                        }
                    }

                    & > span {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 20px;

                        color: #212529;
                        font-weight: bold;
                    }
                }

                @media (max-width: 720px) {

                    padding: 30px;

                    & > h3 {
                        margin-bottom: 20px;
                    }
                    
                    & > div {
                        flex-direction: column;
                        align-items: unset;
                        margin-bottom: 15px;

                        & > div {
                            padding-bottom: 20px;
                        }
                    }
                }
            }
        }

        .divDescription {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            width: 100%;
            max-width: 751px;

            padding: 36px 44px;
            background: #FDFDFD;
            border-radius: 4px;
            

            & > h4 {

                font-weight: 600;
                font-size: 20px;
                line-height: 25px;

                color: #212529;

                padding-bottom: 30px;
            }

            & > p {

                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
            
                color: #495057;
            }

            @media (max-width: 720px) {

                margin-top: 30px;
                padding: 30px;
            }
        }
    }

    .divPhotosAndUserDetails {

        height: 837px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 1440px) {

        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 720px) {

        .divCarDetailsDescription {

            height: auto;
        }
    }
`

export { Container }
