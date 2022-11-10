import {useCallback} from 'react';
import {
  Show,
  TextField,
  ShowController,
  TabbedShowLayout,
  Tab,
  Datagrid,
  ArrayField,
  ImageField,
  ListButton,
  TopToolbar,
  DateField,
  TextInput,
  SimpleShowLayout,
  ReferenceField,
  NumberField,
  BooleanField
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import ImageAvatar from '../components/ImageAvatar';
import PropTypes, { element } from 'prop-types';
import ResponsiveGallery from 'react-responsive-gallery';
//import moment from 'moment';
import moment from 'moment-timezone';
import _ from 'lodash';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.tz.setDefault('UTC/Etc');

let offset = new Date().getTimezoneOffset();

const UserTitle = ({ record }) => {
  return record && record.name && (
    <span>{record.name}</span>
  );
};
const ShowUser = (props) => {
  console.log({props})
  return (    
    
    <Show {...props}>
   <SimpleShowLayout className={"textWrapperStyle"}>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users"><TextField source="full_name" /></ReferenceField>
            <ReferenceField source="property_id" label= "Property Name" reference="properties"><TextField source="property_title" /></ReferenceField>
    
            <TextField source="buyer_name" />
            <TextField source="address" />
            <TextField source="title_company_closer" />
            <NumberField source="amount_of_contract" />
            <DateField source="contract_to_lender_date" />
            <BooleanField source="is_contract_to_lender" />
            <BooleanField source="is_earnest_money_received" />
            <DateField source="earnest_money_received_date" />
            <DateField source="home_inspection_date" />
            <TextField source="home_inspection_info" />
            <DateField source="termite_inspection_date" />
            <BooleanField source="is_survey_received" />
            <BooleanField source="is_new_survey" />
           
            <TextField source="new_survey_info" />
            <DateField source="appraisal_date" />
            <DateField source="appraisal_due_date" />
            <TextField source="appraisal_additional_info" />
            <DateField source="title_commitment" />
            <BooleanField source="is_cda_sent" />
            <BooleanField source="is_home_warranty" />
            <DateField source="home_warranty_date" />
            <BooleanField source="is_switch_over_utilities" />
            <DateField source="option_period_end" />
            <TextField source="termite_inspection_info" />
            <TextField source="additional_info_entire" />
         
        </SimpleShowLayout>
</Show>
     
    
  );
};

export default ShowUser;
