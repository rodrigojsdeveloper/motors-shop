import styled, { css } from "styled-components"
import { IButtonStyledProps } from "../../interfaces"

const Container = styled.button<IButtonStyledProps>`

    width: 100%;
    
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;

    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .5s;

    ${({ size }) => {

        switch(size) {

            case "buttonSizeLogin":

                return css`
                    height: 48px;
                    max-width: 315px;
                `

            case "buttonSizeHeader":

                return css`
                    height: 48px;
                    max-width: 133px;
                `

            case "buttonSizeFooter":

                return css`
                    height: 50px;
                    max-width: 53px;
                `

            case "buttonSizeBanner":

                return css`
                    height: 48px;
                    max-width: 182.51px;
                `

            case "buttonSizeSignUp":

                return css`
                    height: 48px;
                    max-width: 152px;
                `

            case "buttonSizeProductDetails":

                return css`
                    height: 48px;
                    max-width: 206px;
                `
            
            case "buttonSizeProductCarDetails":

                return css`
                    height: 38px;
                    max-width: 100px;
                `

            case "buttonSizeSuccessModal":

                return css`
                    height: 38px;
                    max-width: 132px;
                `
            
            case "buttonSizeModalEditAddressMedium":

                return css`
                    height: 48px;
                    max-width: 193px;
                `

            case "buttonSizeModalEditAddressSmall":

                return css`
                    height: 48px;
                    max-width: 126px;
                `
            
            case "buttonSizeUserDetailsMedium":

                return css`
                    height: 48px;
                    max-width: 126px;
                `

            default:
                return false
        }
    }}

    ${({ color }) => {

        switch(color) {

            case "buttonColorBlueLogin":

                return css`
                    background-color: #4529E6;
                    border: 1.5px solid #4529E6;

                    color: #FFFFFF;
                    padding: 12px 28px;

                    :hover {
                        background-color: #7f6fd9;
                        border-color: #7f6fd9;
                    }
                `

            case "buttonColorWhiteHeader":

                return css`
                    background-color: #FDFDFD;
                    border: 1.5px solid #ADB5BD;

                    color: #0B0D0D;
                    padding: 12px 28px;

                    :hover {
                        border-color: rgba(0, 0, 0, 0.15);
                        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
                        color: rgba(0, 0, 0, 0.65);
                        transform: translateY(-1px);
                    }
                `

            case "buttonColorWhiteSignUp":
                
                return css`
                    background-color: #FDFDFD;
                    border: 1.5px solid #ADB5BD;

                    color: #0B0D0D;
                    padding: 12px 28px;

                    :hover {
                        border-color: #4529E6;
                        background-color: #4529E6;

                        color: #FDFDFD;
                    }
                `
                        
            case "buttonColorGrayFooter":

                return css`
                    background-color: #212529;
                    
                    color: #FFFFFF;
                    font-weight: 900;
                `
            
            case "buttonColorBlueBanner":

                return css`
                    border: 1.5px solid #FDFDFD;
                    border-radius: 4px;

                    background-color: transparent;
                    padding: 12px 28px;

                    color: #FDFDFD;
                    
                    :hover {
                        background-color: #FDFDFD;
                        color: #5126EA;
                    }
                `
            
            case "buttonColorBlackProductDetails":

                return css`
                    background: #0B0D0D;
                    border: 1.5px solid #0B0D0D;
                    border-radius: 4px;
                    
                    padding: 12px 28px;
                    font-weight: 600;
                    font-size: 15px;
                    color: #FFF;
                `
            
            case "buttonColorGrayModalEditAddress":

                return css`
                    background: #DEE2E6;
                    border: 1.5px solid #DEE2E6;
                    border-radius: 4px;
                    
                    padding: 12px 28px;
                    font-weight: 600;
                    font-size: 16px;
                    color: #495057;

                    :hover {
                        background-color: #edf4fb;
                    }
                `

            case "buttonColorWhiteUserDetails":
                
                return css`
                    background: #FDFDFD;
                    border: 1.5px solid #4529E6;
                    border-radius: 4px;
                    
                    padding: 12px 28px;
                    font-weight: 600;
                    font-size: 16px;
                    color: #4529E6;

                    :hover {
                        background-color: #4529E6;
                        color: #FDFDFD;
                    }
                `

            default:
                return false
        }
    }}
`

export { Container }
