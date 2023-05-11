import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  FormControl,
  InputLabel,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";
import Swal from "sweetalert2";
import ReactJson from "react-json-view";

function App() {
  const [formData, setFormData] = useState({
    m1a1: "",
    m1a2: "",
    m1a3: "",
    m1a4: "",
    m2a1: "",
    m2a2: "",
    m2a3: "",
    m2a4: "",
    m3a1: "",
    m3a2: "",
    m3a3: "",
    m3a4: "",
    m4a1: "",
    m4a2: "",
    m4a3: "",
    m4a4: "",
    m5a1: "",
    m5a2: "",
    m5a3: "",
    m5a4: "",
    m6a1: "",
    m6a2: "",
    m6a3: "",
    m6a4: "",
    m7a1: "",
    m7a2: "",
    m7a3: "",
    m7a4: "",
    m8a1: "",
    m8a2: "",
    m8a3: "",
    m8a4: "",
    m9a1: "",
    m9a2: "",
    m9a3: "",
    m9a4: "",
    m10a1: "",
    m10a2: "",
    m10a3: "",
    m10a4: "",
  });
  const handleChange = (e) => {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataJson = {
      aspek_penilaian_1: {
        mahasiswa_1: formData.m1a1,
        mahasiswa_2: formData.m2a1,
        mahasiswa_3: formData.m3a1,
        mahasiswa_4: formData.m4a1,
        mahasiswa_5: formData.m5a1,
        mahasiswa_6: formData.m6a1,
        mahasiswa_7: formData.m7a1,
        mahasiswa_8: formData.m8a1,
        mahasiswa_9: formData.m9a1,
        mahasiswa_10: formData.m10a1,
      },
      aspek_penilaian_2: {
        mahasiswa_1: formData.m1a2,
        mahasiswa_2: formData.m2a2,
        mahasiswa_3: formData.m3a2,
        mahasiswa_4: formData.m4a2,
        mahasiswa_5: formData.m5a2,
        mahasiswa_6: formData.m6a2,
        mahasiswa_7: formData.m7a2,
        mahasiswa_8: formData.m8a2,
        mahasiswa_9: formData.m9a2,
        mahasiswa_10: formData.m10a2,
      },
      aspek_penilaian_3: {
        mahasiswa_1: formData.m1a3,
        mahasiswa_2: formData.m2a3,
        mahasiswa_3: formData.m3a3,
        mahasiswa_4: formData.m4a3,
        mahasiswa_5: formData.m5a3,
        mahasiswa_6: formData.m6a3,
        mahasiswa_7: formData.m7a3,
        mahasiswa_8: formData.m8a3,
        mahasiswa_9: formData.m9a3,
        mahasiswa_10: formData.m10a3,
      },
      aspek_penilaian_4: {
        mahasiswa_1: formData.m1a4,
        mahasiswa_2: formData.m2a4,
        mahasiswa_3: formData.m3a4,
        mahasiswa_4: formData.m4a4,
        mahasiswa_5: formData.m5a4,
        mahasiswa_6: formData.m6a4,
        mahasiswa_7: formData.m7a4,
        mahasiswa_8: formData.m8a4,
        mahasiswa_9: formData.m9a4,
        mahasiswa_10: formData.m10a4,
      },
    };
    var output = JSON.stringify(dataJson);
    console.log(dataJson);
    console.log(output);
    setView(dataJson);
    Swal.fire({
      title: "Data Telah Berhasil Disimpan",
      text: "Data penilaian mahasiswa bisa dilihat pada tabel dibawah",
      icon: "success",
      confirmButtonText: "Keluar",
    });
  };
  const [view, setView] = useState([]);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="center"
            >
              Aplikasi Penilaian Mahasiswa
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Aspek Penilaian 1</TableCell>
              <TableCell>Aspek Penilaian 2</TableCell>
              <TableCell>Aspek Penilaian 3</TableCell>
              <TableCell>Aspek Penilaian 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 1
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m1a1}
                    name="m1a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m1a2}
                    name="m1a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m1a3}
                    name="m1a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m1a4}
                    name="m1a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 2
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m2a1}
                    name="m2a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m2a2}
                    name="m2a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m2a3}
                    name="m2a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m2a4}
                    name="m2a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 3
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m3a1}
                    name="m3a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m3a2}
                    name="m3a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m3a3}
                    name="m3a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m3a4}
                    name="m3a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 4
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m4a1}
                    name="m4a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m4a2}
                    name="m4a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m4a3}
                    name="m4a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m4a4}
                    name="m4a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 5
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m5a1}
                    name="m5a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m5a2}
                    name="m5a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m5a3}
                    name="m5a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m5a4}
                    name="m5a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 6
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m6a1}
                    name="m6a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m6a2}
                    name="m6a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m6a3}
                    name="m6a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m6a4}
                    name="m6a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 7
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m7a1}
                    name="m7a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m7a2}
                    name="m7a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m7a3}
                    name="m7a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m7a4}
                    name="m7a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 8
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m8a1}
                    name="m8a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m8a2}
                    name="m8a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m8a3}
                    name="m8a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m8a4}
                    name="m8a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 9
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m9a1}
                    name="m9a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m9a2}
                    name="m9a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m9a3}
                    name="m9a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m9a4}
                    name="m9a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow sx={{ border: 0 }}>
              <TableCell component="th" scope="row">
                <Stack direction="row">
                  <Avatar src="src/image/avatar.png" />
                  <Typography variant="h6" sx={{ marginLeft: 2 }}>
                    Mahasiswa 10
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m10a1}
                    name="m10a1"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m10a2}
                    name="m10a2"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m10a3}
                    name="m10a3"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl sx={{ width: 120 }}>
                  <InputLabel>Nilai</InputLabel>
                  <Select
                    label="Nilai"
                    value={formData.m10a4}
                    name="m10a4"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        size="large"
        sx={{
          float: "right",
          marginBottom: "50px",
          marginRight: "30px",
          marginTop: "50px",
        }}
        onClick={handleSubmit}
      >
        Simpan
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Data Penilaian Mahasiswa</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <ReactJson src={view} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
