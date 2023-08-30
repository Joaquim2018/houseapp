import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="House" target="userId" label="houses">
          <Datagrid rowClick="show">
            <TextField label="amenity" source="amenity" />
            <TextField label="area" source="area" />
            <TextField label="bath" source="bath" />
            <TextField label="bed" source="bed" />
            <TextField label="car" source="car" />
            <TextField label="category" source="category" />
            <TextField label="cell" source="cell" />
            <TextField label="city" source="city" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="desc" source="desc" />
            <TextField label="ID" source="id" />
            <TextField label="mapData" source="mapData" />
            <TextField label="photos" source="photos" />
            <TextField label="street" source="street" />
            <TextField label="tipo" source="tipo" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ward" source="ward" />
            <TextField label="whatsapp" source="whatsapp" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
