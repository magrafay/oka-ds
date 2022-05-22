import { createGlobalStyle } from "styled-components";
// import "../assets/scss/styles.scss";
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) =>
          theme.body.useBackgroundImage ? `url(${theme.body.backgroundImage}) center center no-repeat` : theme.body.backgroundColor}};
    }
    aside,.f-sider-outer { 
        background: ${({ theme }) => theme.sider.backgroundColor};
        color: ${({ theme }) => theme.sider.textColor};
        .f-sider-item {
            a {
                border-radius:  ${({ theme }) => `${theme.button.borderRadius}px`};
                .f-item-icon {
                    svg {                                    
                        fill: ${({ theme }) => theme.sider.textColor} !important;
                        color: ${({ theme }) => theme.sider.textColor};
                    }
                }
                .f-item-text {
                    color: ${({ theme }) => theme.sider.textColor};
                }
            }            
        }
        &.open {
            .f-sider-item {
                a {
                    border-radius:  ${({ theme }) => `${theme.button.borderRadius}px`};
                    .f-item-icon {
                        svg {                                    
                            color: ${({ theme }) => theme.sider.textColor};
                            }
                        }
                    }
                    .f-item-text {
                        color: ${({ theme }) => theme.sider.textColor};
                    }
                }            
                
            }
        }
    }
    aside ul li.active { 
        &.btn {
            background: ${({ theme }) => theme.button.primary.activeBackgroundColor} !important;
              border-color:  ${({ theme }) => theme.button.primary.borderColor} !important;
        }
    }
    header {
        background: ${({ theme }) => theme.header.backgroundColor};
        
    }
    .f-dialog {
        .f-dialog-content {
            background: ${({ theme }) => theme.dialog.backgroundColor};
            color: ${({ theme }) => theme.dialog.textColor};
        }
    }
    .f-btn, button {
        border-radius:  ${({ theme }) => `${theme.button.borderRadius}px`};
        &.f-btn-primary, button {
            background: ${({ theme }) => theme.button.primary.backgroundColor};
            color: ${({ theme }) => theme.button.primary.textColor};
            border-color:  ${({ theme }) => theme.button.primary.borderColor};
            &:hover {
                background: ${({ theme }) => theme.button.primary.activeBackgroundColor};
                color: ${({ theme }) => theme.button.primary.activeTextColor};
                border-color:  ${({ theme }) => theme.button.primary.activeBorderColor};
            }
        }
        &.f-btn-secondary {
            background: ${({ theme }) => theme.button.secondary.backgroundColor};
            color: ${({ theme }) => theme.button.secondary.textColor};
            border-color:  ${({ theme }) => theme.button.secondary.borderColor};
            &:hover {
                background: ${({ theme }) => theme.button.secondary.backgroundColor};
                color: ${({ theme }) => theme.button.secondary.textColor};
                border-color:  ${({ theme }) => theme.button.primary.activeBorderColor};
            }
        }
    }
    .f-card {
        border-radius:  ${({ theme }) => `${theme.card.borderRadius}px`};
        &.f-card-primary {
            background: ${({ theme }) => theme.card.primary.backgroundColor};
            color: ${({ theme }) => theme.card.primary.textColor};
        }
        &.f-card-secondary {
            background: ${({ theme }) => theme.card.secondary.backgroundColor};
            color: ${({ theme }) => theme.card.secondary.textColor};
        }
    }
    .f-list-networks-list {
        li {
            background: ${({ theme }) => `rgba(${theme.table.backgroundColor},.5)`};
            background: ${({ theme }) => `rgba(${theme.card.secondary.backgroundColor}, .5)`} !important; 
        }
    }
    .f-list-tokens-list {
        li {

            margin-top: 5px;
            border-radius:  ${({ theme }) => `${theme.table.borderRadius}px`} !important;
            border-color: ${({ theme }) => theme.table.borderColor} !important;
            background: ${({ theme }) => theme.table.backgroundColor} !important;
            color: ${({ theme }) => theme.table.textColor} !important;

            .favourite-token {
                svg {
                    color: ${({ theme }) => theme.table.textColor} !important;
                }
            }

        }
    }
    .f-dialog-connect-wallet {
        li {
            margin-top: 5px;
            border-radius:  ${({ theme }) => `${theme.table.borderRadius}px`} !important;
            border-color: ${({ theme }) => theme.table.borderColor} !important;
            background: ${({ theme }) => theme.table.backgroundColor} !important;
            color: ${({ theme }) => theme.table.textColor} !important;
        }
    }
    .f-table {
        .controlRow__root {
            .ButtonGroup__root {
              button {
                background: ${({ theme }) => theme.button.primary.backgroundColor};
                color: ${({ theme }) => theme.button.primary.textColor};
                &:disabled {
                    background: ${({ theme }) => theme.button.primary.activeBackgroundColor};
                color: ${({ theme }) => theme.button.primary.activeTextColor};
                border-color:  ${({ theme }) => theme.button.primary.activeBorderColor};
                  opacity: 0.75;
                }
              }
            }
          }
        table {
            border-radius:  ${({ theme }) => `${theme.table.borderRadius}px`} !important;
            background: ${({ theme }) => theme.table.backgroundColor};
            td, .td {
                border-color: ${({ theme }) => theme.table.borderColor} !important;
                color: ${({ theme }) => theme.table.textColor} !important;
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
