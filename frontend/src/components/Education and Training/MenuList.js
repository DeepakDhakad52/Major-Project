import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="medium" />;
const checkedIcon = <CheckBoxIcon fontSize="medium" />;

export default function CheckboxesTags({ payload, name }) {
    console.log(name);
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={payload}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            className='bg-gray-100 rounded-lg text-slate-500'
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            renderInput={(params) => (
                <TextField {...params} label="" placeholder={`Select ${name}`} />
            )}
        />
    );
}
