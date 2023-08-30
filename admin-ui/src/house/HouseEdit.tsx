import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const HouseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amenity" multiline source="amenity" />
        <NumberInput step={1} label="area" source="area" />
        <NumberInput step={1} label="bath" source="bath" />
        <NumberInput step={1} label="bed" source="bed" />
        <NumberInput step={1} label="car" source="car" />
        <TextInput label="category" source="category" />
        <NumberInput step={1} label="cell" source="cell" />
        <TextInput label="city" source="city" />
        <TextInput label="desc" multiline source="desc" />
        <div />
        <div />
        <TextInput label="street" source="street" />
        <TextInput label="tipo" source="tipo" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="ward" source="ward" />
        <NumberInput step={1} label="whatsapp" source="whatsapp" />
      </SimpleForm>
    </Edit>
  );
};
