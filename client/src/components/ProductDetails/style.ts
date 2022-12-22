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

                & > img {
                    width: 100%;
                    max-width: 441px;
                    height: 252.96px;
                    
                    object-fit: contain;
                }
            }

            .divCarDetails {

                width: 100%;
                max-width: 752px;
                height: 239.39px;
                
                padding: 28px 44px;
                background: #FDFDFD;
                border-radius: 4px;
                
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
            height: 213px;

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
        }
    }

    .divPhotosAndUserDetails {

        height: 837px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .divPhotos {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 36px 44px;

            width: 100%;
            max-width: 440px;
            height: 377px;

            background: #FDFDFD;
            border-radius: 4px;

            & > h3 {
                font-weight: 600;
                font-size: 20px;
                line-height: 25px;

                color: #212529;
                padding-bottom: 20px;
            }

            & > div {

                display: flex;
                width: 100%;
                max-width: 352px;
                height: 248px;

                flex-direction: column;
                justify-content: space-between;

                & > div {

                    display: flex;
                    width: 100%;
                    max-width: 352px;
                    flex-direction: row;
                    justify-content: space-between;

                    & > div {
                        
                        width: 100%;
                        max-width: 108px;
                        height: 108px;
                        padding: 27px 7px;

                        background: #E9ECEF;
                        border-radius: 4px;

                        & > img {
                            width: 100%;
                            max-width: 94.22px;
                            height: 54.05px;

                            object-fit: contain;
                        }
                    }
                }
            }
        }
    }

    .divUserDetails {

        width: 100%;
        max-width: 440px;
        height: 426px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 36px 44px;
        border-radius: 4px;

        background: #FFF;

        & > div {

            width: 100%;
            max-width: 352px;
            text-align: center;
        
            & > img {
            
                width: 100%;
                max-width: 104px;
                height: 104px;

                background: #4529E6;

                border-radius: 50%;
            }

            & > h4 {
                font-weight: 600;
                font-size: 20px;
                line-height: 25px;

                padding: 30px 0 15px 0;

                color: #212529;
            }

            & > p {
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                
                color: #495057;
                padding-bottom: 15px;
            }

            & > button {
                margin: 0 auto;
            }
        }  
    }
`

export { Container }
