import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { CalendarMonth, ArrowDropDown } from "@mui/icons-material";
export default function FilterComponent({ filterData }: any) {
  // const [inputValues,setInputValues]=useState({
  //     date: 'This Year',
  //     location: 'Location',
  //     status: 'Status'
  // })
  return (
    <div className="flex items-center justify-between pb-[20px] w-full">
      <div className="flex items-center">
        {filterData?.selects?.map(({ title, type, options }: any) => (
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "#0D0D0D" }}
            >
              {title}
            </InputLabel>
            <Select
              key={title}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              label={title}
              sx={{
                "& .MuiSelect-icon": {
                  color: "#0D0D0D",
                },
                ":before": {
                  border: "none",
                },
              }}
              IconComponent={type === "date" ? CalendarMonth : ArrowDropDown}
              style={{
                background: "#FFF",
                border: "0.5px solid #89B0EB",
                borderRadius: "8px",
                fill: "#0D0D0D",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {options?.map(({ title, value }: any, index: number) => (
                <MenuItem key={index} value={value}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </div>
      <div className="flex items-center gap-5">
        {filterData?.buttons?.map(({ title }: any) => (
          <Button
            variant="contained"
            style={{ backgroundColor: "#4318ff", borderRadius: "8px" }}
          >
            {title}
          </Button>
        ))}
      </div>
    </div>
  );
}
