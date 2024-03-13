import React from "react";
import { TextInput } from "@strapi/design-system";
import { useIntl } from "react-intl";

const URLInput = ({
  error,
  description,
  intlLabel,
  placeholder,
  required,
  value = "",
  name,
  selectedRoutes,
  onChange,
  onSelection,
  options,
  attribute,
}) => {
  const { formatMessage } = useIntl();
  const [show, setShow] = React.useState(false);

  const handleChange = ({ target }) => {
    onChange({ target: { name, value: target.value, type: attribute.type } });
  };

  return (
    <TextInput
      disabled={false}
      error={error}
      hint={description ? formatMessage(description) : ""}
      label={intlLabel ? formatMessage(intlLabel) : ""}
      name={name}
      onFocus={() => setShow(true)}
      onChange={handleChange}
      placeholder={placeholder ? formatMessage(placeholder) : ""}
      required={required}
      value={value || ""}
    />
  );
};

export default URLInput;
