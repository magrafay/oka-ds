import React, { useState, useEffect } from "react";
import { VscSymbolColor } from "react-icons/vsc";
// import { Modal } from "react-bootstrap";
//@ts-ignore
import { ColorPicker } from "react-color-gradient-picker";
import "../../assets/css/FthemeBuilder-styles.min.css";
import "react-color-gradient-picker/dist/index.css";
import { RiSwitchLine } from "react-icons/ri";
import { FButton, FCard, FDialog, FGrid, FGridItem, FTextarea } from "../..";
import { FInputText } from "./FthemeBuilderInputText";
import { FThemeBuilderRadio } from "./FthemeBuilderInputRadio";
import { FThemeBuilderCheckbox } from "./FthemeBuilderInputCheckbox";
// import { THEME_CONFIG } from "../interfaces/Theme";

const color = {
  red: 255,
  green: 0,
  blue: 0,
  alpha: 1,
};

interface ThemeBuilderProps {
  config: any;
  onChange: any;
}

export const defaultThemeConfig = {
  head: {
    metaDescription: "",
    metaImage: "",
    metaUrl: "",
    title: "",
    favicon: "",
  },
  body: {
    useBackgroundImage: false,
    backgroundImage: "",
    backgroundColor: "",
    removeOverlay: "",
    headingColor: "",
  },
  header: {
    backgroundColor: "",
  },
  sider: {
    brandLogo: "",
    backgroundColor: "",
    textColor: "",
  },
  card: {
    borderRadius: 0,
    primary: {
      backgroundColor: "",
      textColor: "",
      activeBackgroundColor: "",
      activeTextColor: "",
    },
    secondary: {
      backgroundColor: "",
      textColor: "",
      activeBackgroundColor: "",
      activeTextColor: "",
    },
  },
  button: {
    borderRadius: 0,
    primary: {
      backgroundColor: "",
      textColor: "",
      borderColor: "",
      activeBackgroundColor: "",
      activeTextColor: "",
      activeBorderColor: "",
    },
    secondary: {
      backgroundColor: "",
      textColor: "",
      borderColor: "",
      activeBackgroundColor: "",
      activeTextColor: "",
      activeBorderColor: "",
    },
  },
  alert: {
    error: {
      backgroundColor: "",
      textColor: "",
    },
    success: {
      backgroundColor: "",
      textColor: "",
    },
    warning: {
      backgroundColor: "",
      textColor: "",
    },
  },
  dialog: {
    backgroundColor: "",
    textColor: "",
  },
  table: {
    backgroundColor: "",
    textColor: "",
    borderColor: "",
    borderRadius: 0,
  },
};

const gradient = {
  points: [
    {
      left: 0,
      red: 255,
      green: 0,
      blue: 0,
      alpha: 1,
    },
    {
      left: 100,
      red: 255,
      green: 0,
      blue: 0,
      alpha: 1,
    },
  ],
  degree: 0,
  type: "linear",
};

export const ThemeBuilder = ({ config, onChange = () => {} }: ThemeBuilderProps) => {
  const [openThemeBuilder, setOpenThemeBuilder] = useState(false);
  const [themeConfig, setThemeConfig] = useState({ ...config });
  const [fieldName, setFieldName] = useState("body.backgroundImage");
  const [isGradient, setIsGradient] = useState(false);
  // eslint-disable-next-line
  const [selectedHeading, setSelectedHeading] = useState("Page Background Image");
  const [loading, setLoading] = useState(false);

  const onColorChange = (gradientAttrs: any) => {
    if (fieldName.includes("head.")) {
      // handleHeadChanges(fieldName, gradientAttrs);
    } else if (fieldName.includes("body.")) {
      handleBodyChanges(fieldName, gradientAttrs);
    } else if (fieldName.includes("header.")) {
      // handleHeaderChange(fieldName, gradientAttrs);
    } else if (fieldName.includes("button.")) {
      handleButtonChanges(fieldName, gradientAttrs);
    } else if (fieldName.includes("sider.")) {
      handleSiderChanges(fieldName, gradientAttrs);
    } else if (fieldName.includes("card.")) {
      handleCardChanges(fieldName, gradientAttrs);
    } else if (fieldName.includes("alert.")) {
      // handleAlertChanges(fieldName, gradientAttrs);
    } else if (fieldName.includes("dialog.")) {
      handleDialogChanges(fieldName, gradientAttrs);
    } else if (fieldName.includes("table.")) {
      handleTableChanges(fieldName, gradientAttrs);
    }
    setThemeConfig({
      ...themeConfig,
      [fieldName]: gradientAttrs,
    });
  };

  useEffect(() => {
    if (fieldName) {
      setLoading(true);
    }
  }, [fieldName]);

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [loading]);

  const handleHeadChanges = () => {};

  const handleBodyChanges = (attributeName: any, colors: any) => {
    const toUpdate = attributeName.split(".");
    themeConfig[`${toUpdate[0]}`][`${toUpdate[1]}`] = colors.style;
    setThemeConfig({ ...themeConfig });
  };

  const handleHeaderChange = () => {
    setThemeConfig({ ...themeConfig });
  };

  const handleButtonChanges = (attributeName: any, colors: any) => {
    const toUpdate = attributeName.split(".");
    themeConfig[`${toUpdate[0]}`][`${toUpdate[1]}`][`${toUpdate[2]}`] = colors.style;
  };

  const handleSiderChanges = (attributeName: any, colors: any) => {
    const toUpdate = attributeName.split(".");
    themeConfig[`${toUpdate[0]}`][`${toUpdate[1]}`] = colors.style;
    setThemeConfig({ ...themeConfig });
  };

  const handleCardChanges = (attributeName: any, colors: any) => {
    const toUpdate = attributeName.split(".");
    themeConfig[`${toUpdate[0]}`][`${toUpdate[1]}`][`${toUpdate[2]}`] = colors.style;
  };

  const handleAlertChanges = () => {};

  const handleDialogChanges = (attributeName: any, colors: any) => {
    const toUpdate = attributeName.split(".");
    themeConfig[`${toUpdate[0]}`][`${toUpdate[1]}`] = colors.style;
    setThemeConfig({ ...themeConfig });
  };

  const handleTableChanges = (attributeName: any, colors: any) => {
    const toUpdate = attributeName.split(".");
    themeConfig[`${toUpdate[0]}`][`${toUpdate[1]}`] = colors.style;
    setThemeConfig({ ...themeConfig });
  };

  const savehandler = () => {
    onChange({ ...themeConfig });
  };

  const exportHandler = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(themeConfig)], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "themeJson.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <>
      <FDialog
        title="Theme Builder"
        className="theme-builder"
        type="drawer"
        // contentClassName="p-0"
        show={openThemeBuilder}
        onHide={() => {
          setOpenThemeBuilder(false);
        }}>
        <div className="color-picker position-sticky top-0">
          <h4>{selectedHeading}</h4>
          {!loading && fieldName !== "body.backgroundImage" && fieldName !== "mainLogo" ? (
            <ColorPicker
              onStartChange={(e: any) => {
                onColorChange(e);
              }}
              onEndChange={(e: any) => {
                onColorChange(e);
              }}
              onChange={(e: any) => {
                onColorChange(e);
              }}
              {...(isGradient
                ? {
                    isGradient: true,
                    gradient: themeConfig[fieldName] ? themeConfig[fieldName] : gradient,
                  }
                : {
                    color: themeConfig[fieldName] ? themeConfig[fieldName] : color,
                  })}
            />
          ) : null}
        </div>
        <div className="theme-builder-form">
          <FGrid className="theme-bulider-component d-block f-pt-1">
            <FGridItem dir={"column"}>
              <FThemeBuilderRadio
                label={"Page Background Image"}
                name="body.backgroundImage"
                selectedFieldName={fieldName}
                setFieldName={setFieldName}
                setSelectedHeading={setSelectedHeading}
                radioChangeHandler={() => {
                  setThemeConfig({
                    ...themeConfig,
                    body: { ...themeConfig.body, useBackgroundImage: true },
                  });
                }}
              />

              {themeConfig.body.useBackgroundImage === true ? (
                <FInputText
                  type="text"
                  id="body.backgroundImage_Id"
                  name="body.backgroundImage"
                  placeholder="Enter image path here ..."
                  value={themeConfig.body.backgroundImage}
                  onChange={(e: any) => {
                    setThemeConfig({
                      ...themeConfig,
                      body: {
                        ...themeConfig.body,
                        backgroundImage: e.target.value,
                      },
                    });
                  }}
                />
              ) : (
                ""
              )}
              <FThemeBuilderCheckbox
                label="Remove Page Background Shadow"
                id="body.removeOverlay_id"
                name="body.removeOverlay"
                className="custom-control-input"
                checked={themeConfig.body.removeOverlay === true}
                onChange={(e: any) => {
                  e.preventDefault();
                  setThemeConfig({
                    ...themeConfig,
                    body: {
                      ...themeConfig.body,
                      removeOverlay: !themeConfig.body.removeOverlay,
                    },
                  });
                }}
              />
              <FThemeBuilderRadio
                name="body.backgroundColor"
                label={"Page Background Color"}
                selectedFieldName={fieldName}
                setFieldName={setFieldName}
                setSelectedHeading={setSelectedHeading}
                radioChangeHandler={() => {
                  setIsGradient(true);
                  setThemeConfig({
                    ...themeConfig,
                    body: {
                      ...themeConfig.body,
                      useBackgroundImage: false,
                    },
                  });
                }}
              />
              <FInputText
                label="Favicon"
                type="text"
                id="favicon"
                name="favicon"
                placeholder="Enter favicon path here ..."
                value={themeConfig.head.favicon}
                onChange={(e: any) => {
                  setThemeConfig({
                    ...themeConfig,
                    head: { ...themeConfig.head, favicon: e.target.value },
                  });
                }}
                className="form-control"
              />
              <FInputText
                label="Logo"
                type="text"
                id="mainLogo"
                name="mainLogo"
                placeholder="Enter logo path here ..."
                value={themeConfig.sider.brandLogo}
                onChange={(e: any) => {
                  setThemeConfig({
                    ...themeConfig,
                    sider: {
                      ...themeConfig.sider,
                      brandLogo: e.target.value,
                    },
                  });
                }}
                className="form-control"
              />
              <FTextarea
                label="Meta Description"
                placeholder="Enter meta description here..."
                min="0"
                rows="3"
                id="metaDescription"
                name="metaDescription"
                value={themeConfig.head.metaDescription}
                onChange={(e: any) => {
                  setThemeConfig({
                    ...themeConfig,
                    head: {
                      ...themeConfig.head,
                      metaDescription: e.target.value,
                    },
                  });
                }}
              />
              <FInputText
                label="Meta Image"
                type="text"
                id="metaImage"
                name="metaImage"
                placeholder="Enter meta image here ..."
                value={themeConfig.head.metaImage}
                onChange={(e: any) => {
                  setThemeConfig({
                    ...themeConfig,
                    head: { ...themeConfig.head, metaImage: e.target.value },
                  });
                }}
              />
              <FInputText
                label="Meta URL"
                type="text"
                id="metaUrl"
                name="metaUrl"
                placeholder="Enter meta url here ..."
                value={themeConfig.head.metaUrl}
                onChange={(e: any) => {
                  setThemeConfig({
                    ...themeConfig,
                    head: { ...themeConfig.head, metaUrl: e.target.value },
                  });
                }}
              />
              <FInputText
                label="Project Title"
                type="text"
                id="projectTitle"
                name="projectTitle"
                placeholder="Enter project title here ..."
                value={themeConfig.head.title}
                onChange={(e: any) => {
                  setThemeConfig({
                    ...themeConfig,
                    head: { ...themeConfig.head, title: e.target.value },
                  });
                }}
              />
            </FGridItem>
          </FGrid>
          <div className="component-title">
            <h5>Siderbar Design</h5>
          </div>
          <FGrid className="theme-bulider-component">
            <FGridItem>
              <FCard
                variant="secondary"
                style={
                  themeConfig.sider.backgroundColor
                    ? {
                        background: themeConfig.sider.backgroundColor ? `${themeConfig.sider.backgroundColor.style}` : undefined,
                        color: themeConfig.sider.textColor ? `${themeConfig.sider.textColor.style}` : undefined,
                      }
                    : {}
                }>
                <FThemeBuilderRadio
                  name="sider.backgroundColor"
                  selectedFieldName={fieldName}
                  prefix="Sider"
                  label={"Background Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(true);
                  }}
                />
                <FThemeBuilderRadio
                  name="sider.textColor"
                  selectedFieldName={fieldName}
                  prefix="Sider"
                  label={"Text Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(false);
                  }}
                />
              </FCard>
            </FGridItem>
          </FGrid>
          <div className="component-title">
            <h5>Button Design</h5>
          </div>
          <FGrid className="theme-bulider-component">
            <FGridItem>
              <FInputText
                type="number"
                min="0"
                max="100"
                id="btnBorderRadius"
                name="btnBorderRadius"
                placeholder="Enter radius amount ..."
                value={themeConfig.button.borderRadius}
                onChange={(e: any) => {
                  setThemeConfig({
                    ...themeConfig,
                    button: {
                      ...themeConfig.button,
                      borderRadius: e.target.value,
                    },
                  });
                }}
                className="form-control"
              />
            </FGridItem>
            <FGrid>
              <FGridItem size={[5]} dir={"column"}>
                <FButton
                  className="w-100"
                  title="Default Button"
                  style={
                    themeConfig.button.primary.backgroundColor || themeConfig.button.primary.textColor
                      ? {
                          background: themeConfig.button.primary.backgroundColor ? `${themeConfig.button.primary.backgroundColor.style}` : undefined,
                          color: themeConfig.button.primary.textColor ? themeConfig.button.primary.textColor.style : undefined,
                          borderRadius: themeConfig.btnBorderRadius ? `${themeConfig.btnBorderRadius.style}` : undefined,
                        }
                      : {}
                  }
                />
                <FCard
                  variant="secondary"
                  style={
                    themeConfig.card.primary.backgroundColor
                      ? {
                          background: themeConfig.card.primary.backgroundColor ? `${themeConfig.card.primary.backgroundColor.style}` : undefined,
                          color: themeConfig.card.primary.textColor ? `${themeConfig.card.primary.textColor.style}` : undefined,
                        }
                      : {}
                  }>
                  <FThemeBuilderRadio
                    name="button.primary.backgroundColor"
                    selectedFieldName={fieldName}
                    prefix="Primary Button"
                    label={"Background Color"}
                    setFieldName={setFieldName}
                    setSelectedHeading={setSelectedHeading}
                    radioChangeHandler={() => {
                      setIsGradient(true);
                    }}
                  />
                  <FThemeBuilderRadio
                    name="button.primary.textColor"
                    selectedFieldName={fieldName}
                    prefix="Primary Button"
                    label={"Text Color"}
                    setFieldName={setFieldName}
                    setSelectedHeading={setSelectedHeading}
                    radioChangeHandler={() => {
                      setIsGradient(false);
                    }}
                  />
                  <FThemeBuilderRadio
                    name="button.primary.borderColor"
                    selectedFieldName={fieldName}
                    prefix="Border color"
                    label={"Border Color"}
                    setFieldName={setFieldName}
                    setSelectedHeading={setSelectedHeading}
                    radioChangeHandler={() => {
                      setIsGradient(false);
                    }}
                  />
                </FCard>
              </FGridItem>
              <FGridItem size={[2]} dir={"column"}>
                <FButton title={<RiSwitchLine />} className="btn-icon btn-swap" />
              </FGridItem>
              <FGridItem size={[5]} dir={"column"}>
                <FButton
                  className="w-100"
                  title="Button Active"
                  style={
                    themeConfig.button || themeConfig.button.primary.activeBackgroundColor
                      ? {
                          background: themeConfig.button.primary.activeBackgroundColor
                            ? `${themeConfig.button.primary.activeBackgroundColor}`
                            : undefined,
                          color: themeConfig.button ? themeConfig.button.primary.activeTextColor : undefined,
                        }
                      : {}
                  }
                />
                <FCard
                  variant="secondary"
                  style={
                    themeConfig.card.secondary.backgroundColor
                      ? {
                          background: themeConfig.card.secondary.backgroundColor ? `${themeConfig.card.secondary.backgroundColor.style}` : undefined,
                          color: themeConfig.card.secondary.textColor ? `${themeConfig.card.secondary.textColor.style}` : undefined,
                        }
                      : {}
                  }>
                  <FThemeBuilderRadio
                    name="button.primary.activeBackgroundColor"
                    selectedFieldName={fieldName}
                    prefix="Primary"
                    label={"Background Color"}
                    setFieldName={setFieldName}
                    setSelectedHeading={setSelectedHeading}
                    radioChangeHandler={() => {
                      setIsGradient(true);
                    }}
                  />
                  <FThemeBuilderRadio
                    name="button.primary.activeTextColor"
                    selectedFieldName={fieldName}
                    prefix="Primary Button Hover"
                    label={"Text Color"}
                    setFieldName={setFieldName}
                    setSelectedHeading={setSelectedHeading}
                    radioChangeHandler={() => {
                      setIsGradient(false);
                    }}
                  />
                  <FThemeBuilderRadio
                    name="button.primary.activeBorderColor"
                    selectedFieldName={fieldName}
                    prefix="Primary"
                    label={"Border Color"}
                    setFieldName={setFieldName}
                    setSelectedHeading={setSelectedHeading}
                    radioChangeHandler={() => {
                      setIsGradient(false);
                    }}
                  />
                </FCard>
              </FGridItem>
            </FGrid>
          </FGrid>

          <div className="component-title">
            <h5>Card Design:</h5>
          </div>
          <FGrid className="theme-bulider-component">
            <FGridItem>
              <FInputText
                type="number"
                display="flex"
                min="0"
                max="20"
                id="cardBorderRadius"
                name="cardBorderRadius"
                placeholder="Enter radius amount ..."
                value={themeConfig.card.borderRadius}
                onChange={(e: any) => {
                  setThemeConfig({
                    ...themeConfig,
                    card: {
                      ...themeConfig.card,
                      borderRadius: e.target.value,
                    },
                  });
                }}
                className="form-control"
              />
            </FGridItem>
            <FGridItem size={[6]}>
              <FCard
                variant="secondary"
                style={
                  themeConfig.card.secondary.backgroundColor
                    ? {
                        background: themeConfig.card.secondary.backgroundColor ? `${themeConfig.card.secondary.backgroundColor.style}` : undefined,
                      }
                    : {}
                }>
                <div className="card-title">
                  <h5
                    style={{
                      color: themeConfig.card.primary.textColor ? `${themeConfig.card.primary.textColor.style}` : undefined,
                    }}>
                    Card Primary
                  </h5>
                </div>
                <FThemeBuilderRadio
                  name="card.primary.backgroundColor"
                  selectedFieldName={fieldName}
                  prefix="Primary Card"
                  label={"Background Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(true);
                  }}
                />
                <FThemeBuilderRadio
                  name="card.primary.textColor"
                  selectedFieldName={fieldName}
                  prefix="Primary Card"
                  label={"Text Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(false);
                  }}
                />
              </FCard>
            </FGridItem>
            <FGridItem size={[6]}>
              <FCard
                variant="secondary"
                style={
                  themeConfig.card.secondary.backgroundColor
                    ? {
                        background: themeConfig.card.secondary.backgroundColor ? `${themeConfig.card.secondary.backgroundColor.style}` : undefined,
                      }
                    : {}
                }>
                <div className="card-title">
                  <h5
                    style={{
                      color: themeConfig.card.secondary.textColor ? `${themeConfig.card.secondary.textColor.style}` : undefined,
                    }}>
                    Card Secondary
                  </h5>
                </div>
                <FThemeBuilderRadio
                  name="card.secondary.backgroundColor"
                  selectedFieldName={fieldName}
                  prefix="Secondary Card"
                  label={"Background Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(true);
                  }}
                />
                <FThemeBuilderRadio
                  name="card.secondary.textColor"
                  selectedFieldName={fieldName}
                  prefix="Secondary Card"
                  label={"Text Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(false);
                  }}
                />
              </FCard>
            </FGridItem>
          </FGrid>
          <div className="component-title">
            <h5>Dialog Design</h5>
          </div>
          <FGrid className="theme-bulider-component">
            <FGridItem>
              <FCard
                variant="secondary"
                style={
                  themeConfig.dialog.backgroundColor
                    ? {
                        background: themeConfig.dialog.backgroundColor ? `${themeConfig.dialog.backgroundColor.style}` : undefined,
                        color: themeConfig.dialog.textColor ? `${themeConfig.dialog.textColor.style}` : undefined,
                      }
                    : {}
                }>
                <FThemeBuilderRadio
                  name="dialog.backgroundColor"
                  selectedFieldName={fieldName}
                  prefix="Dialog"
                  label={"Background Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(true);
                  }}
                />
                <FThemeBuilderRadio
                  name="dialog.textColor"
                  selectedFieldName={fieldName}
                  prefix="Dialog"
                  label={"Text Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(false);
                  }}
                />
              </FCard>
            </FGridItem>
          </FGrid>
          <div className="component-title">
            <h5>List Design</h5>
          </div>
          <FGrid className="theme-bulider-component">
            <FGridItem>
              <FInputText
                type="number"
                min="0"
                max="20"
                id="tableBorderRadius"
                name="tableBorderRadius"
                placeholder="Enter radius amount ..."
                value={themeConfig.table.borderRadius}
                onChange={(e: any) => {
                  setThemeConfig({
                    ...themeConfig,
                    table: {
                      ...themeConfig.table,
                      borderRadius: e.target.value,
                    },
                  });
                }}
              />
            </FGridItem>
            <FGridItem>
              <FCard
                variant="secondary"
                style={
                  themeConfig.dialog.backgroundColor
                    ? {
                        background: themeConfig.dialog.backgroundColor ? `${themeConfig.dialog.backgroundColor.style}` : undefined,
                        color: themeConfig.dialog.textColor ? `${themeConfig.dialog.textColor.style}` : undefined,
                      }
                    : {}
                }>
                <FThemeBuilderRadio
                  name="table.backgroundColor"
                  selectedFieldName={fieldName}
                  prefix="Table"
                  label={"Background Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(false);
                  }}
                />
                <FThemeBuilderRadio
                  name="table.textColor"
                  selectedFieldName={fieldName}
                  prefix="Table"
                  label={"Text Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(false);
                  }}
                />
                <FThemeBuilderRadio
                  name="table.borderColor"
                  selectedFieldName={fieldName}
                  prefix="Table"
                  label={"Border Color"}
                  setFieldName={setFieldName}
                  setSelectedHeading={setSelectedHeading}
                  radioChangeHandler={() => {
                    setIsGradient(false);
                  }}
                />
              </FCard>
            </FGridItem>
          </FGrid>
          <div className="btn-bar">
            <FButton
              variant="primary"
              // onClick={defaultThemeConfig}
              title="Set Default"
            />
            <FButton variant="primary" onClick={() => savehandler()} title="Apply" />
            <FButton variant="primary" onClick={() => exportHandler()} title="Export" />
          </div>
        </div>
        {/* </Modal.Body> */}
      </FDialog>
      <FButton
        title={<VscSymbolColor size="25" />}
        variant="primary"
        className="theme-builder-btn"
        onClick={() => {
          setOpenThemeBuilder(true);
        }}></FButton>
    </>
  );
};
