import { createGlobalStyle } from "styled-components";
// import "../assets/scss/styles.scss";
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }: any) =>
          theme.body.useBackgroundImage ? `url(${theme.body.backgroundImage}) center center no-repeat` : theme.body.backgroundColor}};
    }
    aside,.f-sider-outer { 
        background: ${({ theme }: any) => theme.sider.backgroundColor};
        color: ${({ theme }: any) => theme.sider.textColor};
        .f-sider-item {
            a {
                border-radius:  ${({ theme }: any) => `${theme.button.borderRadius}px`};
                .f-item-icon {
                    svg {                                    
                        fill: ${({ theme }: any) => theme.sider.textColor} !important;
                        color: ${({ theme }: any) => theme.sider.textColor};
                    }
                }
                .f-item-text {
                    color: ${({ theme }: any) => theme.sider.textColor};
                }
            }            
        }
        &.open {
            .f-sider-item {
                a {
                    border-radius:  ${({ theme }: any) => `${theme.button.borderRadius}px`};
                    .f-item-icon {
                        svg {                                    
                            color: ${({ theme }: any) => theme.sider.textColor};
                            }
                        }
                    }
                    .f-item-text {
                        color: ${({ theme }: any) => theme.sider.textColor};
                    }
                }            
                
            }
        }
    }
    aside ul li.active { 
        &.btn {
            background: ${({ theme }: any) => theme.button.primary.activeBackgroundColor} !important;
              border-color:  ${({ theme }: any) => theme.button.primary.borderColor} !important;
        }
    }
    header {
        background: ${({ theme }: any) => theme.header.backgroundColor};
        
    }
    .f-dialog {
        .f-dialog-content {
            background: ${({ theme }: any) => theme.dialog.backgroundColor};
            color: ${({ theme }: any) => theme.dialog.textColor};
        }
    }
    .f-btn, button {
        border-radius:  ${({ theme }: any) => `${theme.button.borderRadius}px`};
        &.f-btn-primary, button {
            background: ${({ theme }: any) => theme.button.primary.backgroundColor};
            color: ${({ theme }: any) => theme.button.primary.textColor};
            border-color:  ${({ theme }: any) => theme.button.primary.borderColor};
            &:hover {
                background: ${({ theme }: any) => theme.button.primary.activeBackgroundColor};
                color: ${({ theme }: any) => theme.button.primary.activeTextColor};
                border-color:  ${({ theme }: any) => theme.button.primary.activeBorderColor};
            }
        }
        &.f-btn-secondary {
            background: ${({ theme }: any) => theme.button.secondary.backgroundColor};
            color: ${({ theme }: any) => theme.button.secondary.textColor};
            border-color:  ${({ theme }: any) => theme.button.secondary.borderColor};
            &:hover {
                background: ${({ theme }: any) => theme.button.secondary.backgroundColor};
                color: ${({ theme }: any) => theme.button.secondary.textColor};
                border-color:  ${({ theme }: any) => theme.button.primary.activeBorderColor};
            }
        }
    }
    .f-card {
        border-radius:  ${({ theme }: any) => `${theme.card.borderRadius}px`};
        &.f-card-primary {
            background: ${({ theme }: any) => theme.card.primary.backgroundColor};
            color: ${({ theme }: any) => theme.card.primary.textColor};
        }
        &.f-card-secondary {
            background: ${({ theme }: any) => theme.card.secondary.backgroundColor};
            color: ${({ theme }: any) => theme.card.secondary.textColor};
        }
    }
    .f-list-networks-list {
        li {
            background: ${({ theme }: any) => `rgba(${theme.table.backgroundColor},.5)`};
            background: ${({ theme }: any) => `rgba(${theme.card.secondary.backgroundColor}, .5)`} !important; 
        }
    }
    .f-list-tokens-list {
        li {

            margin-top: 5px;
            border-radius:  ${({ theme }: any) => `${theme.table.borderRadius}px`} !important;
            border-color: ${({ theme }: any) => theme.table.borderColor} !important;
            background: ${({ theme }: any) => theme.table.backgroundColor} !important;
            color: ${({ theme }: any) => theme.table.textColor} !important;

            .favourite-token {
                svg {
                    color: ${({ theme }: any) => theme.table.textColor} !important;
                }
            }

        }
    }
    .f-dialog-connect-wallet {
        li {
            margin-top: 5px;
            border-radius:  ${({ theme }: any) => `${theme.table.borderRadius}px`} !important;
            border-color: ${({ theme }: any) => theme.table.borderColor} !important;
            background: ${({ theme }: any) => theme.table.backgroundColor} !important;
            color: ${({ theme }: any) => theme.table.textColor} !important;
        }
    }
    .f-table {
        .controlRow__root {
            .ButtonGroup__root {
              button {
                background: ${({ theme }: any) => theme.button.primary.backgroundColor};
                color: ${({ theme }: any) => theme.button.primary.textColor};
                &:disabled {
                    background: ${({ theme }: any) => theme.button.primary.activeBackgroundColor};
                color: ${({ theme }: any) => theme.button.primary.activeTextColor};
                border-color:  ${({ theme }: any) => theme.button.primary.activeBorderColor};
                  opacity: 0.75;
                }
              }
            }
          }
        table {
            border-radius:  ${({ theme }: any) => `${theme.table.borderRadius}px`} !important;
            background: ${({ theme }: any) => theme.table.backgroundColor};
            td, .td {
                border-color: ${({ theme }: any) => theme.table.borderColor} !important;
                color: ${({ theme }: any) => theme.table.textColor} !important;
            }
            thead {
                tr:frist-child {
                    td {
                        border-bottom-color: transparent !important;
                    }
                }
                tr:last-child {
                    td {
                        border-top-color: transparent !important;
                    }
                }
            }    
            
        }
    }
    
`;

// export default GlobalStyles;
