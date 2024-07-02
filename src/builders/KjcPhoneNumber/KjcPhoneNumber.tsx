import React from 'react';
import {Form, FormInstance, Input, Select} from 'antd';
import {getCountries, getCountryCallingCode, isValidPhoneNumber} from 'react-phone-number-input';
import Flag from 'react-flagkit';
import 'react-phone-number-input/style.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {CountryCode} from "libphonenumber-js/types";

const { Option } = Select;

type CountrySelectProps = {
  value: string | undefined;
  labels: { [key: string]: string };
  onChange: (country: string) => void;
};

type KjcPhoneNumberProps = {
  className?: string,
  form: FormInstance,
  label: string,
  name: string,
  phoneNumber?: string,
  phoneNumberCountry?: CountryCode,
  // eslint-disable-next-line
  rules?: any[],
  setPhoneNumber?: (phoneNumber: string) => void
  setPhoneNumberCountry?: (countryCode: CountryCode) => void,
};

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange, labels, ...rest }) => (
  <Select
    {...rest}
    showSearch
    value={value}
    onChange={(country) => onChange(country)}
    style={{ width: 100 }}
  >
    <Option value="">{labels.ZZ}</Option>
    {getCountries().map((country) => (
      <Option key={country} value={country}>
        <div className="flex flex-row gap-1">
          <Flag country={country} size={16} style={{ marginRight: 0 }} />
          +{getCountryCallingCode(country)}
        </div>
      </Option>
    ))}
  </Select>
);

const KjcPhoneNumber = (props: KjcPhoneNumberProps   ) => {

  const labels = {
    ZZ: 'code',
  };

  const onCountrySelectChange = (country: string) => {
    getCountries().map((countryCode) => {
      if (countryCode === country) {
        if (props.setPhoneNumberCountry) { // Check if setPhoneNumberCountry is defined
          props.setPhoneNumberCountry(countryCode);
        }
      }
    });
  };

  const onPhoneNumberInputChange = (phoneNumber: string) => {
    if (props.setPhoneNumber) { // Check if setPhoneNumber is defined
      if (phoneNumber) {
        props.setPhoneNumber(phoneNumber);
      }
    }
  }

  return (
    <Form.Item
      name={props.name}
      label={''}
      rules={[
        ...(props.rules || []),
        {
          validator: (_, value) => {
            if (value && !isValidPhoneNumber(value, props.phoneNumberCountry)) {
              return Promise.reject('Invalid phone number');
            }
            return Promise.resolve();
          },
        },
      ]}
      className={props.className}
      // normalize={normalizePhoneNumber}
    >
      <Input
        addonBefore={
          <CountrySelect
            value={props.phoneNumberCountry}
            labels={labels}
            onChange={onCountrySelectChange}
          />
        }
        value={props.phoneNumber}
        onChange={(e) => onPhoneNumberInputChange(e.target.value)}
        placeholder="Enter phone number"
        allowClear
      />
    </Form.Item>
  );
};

export default KjcPhoneNumber;
