import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import InputBase from "@mui/material/InputBase";
import { Container } from "@mui/material";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

function Home() {
  const [open, setOpen] = React.useState(true);
  const [periodOptions, setPeriodOptions] = React.useState([]);
  const [statusOptions, setStatusOptions] = React.useState([]);
  const [categoryOptions, setCategoryOptions] = React.useState([]);
  const [locationOptions, setLocationOptions] = React.useState([]);
  const [submissionOptions, setSubmissionOptions] = React.useState([]);

  const handlePeriodChange = (value) => {
    setPeriodOptions(value);
  };

  const handleStatusChange = (value) => {
    setStatusOptions(value);
  };

  const handleCategoryChange = (value) => {
    setCategoryOptions(value);
  };

  const handleLocationChange = (value) => {
    setLocationOptions(value);
  };

  const handleSubmissionChange = (value) => {
    setSubmissionOptions(value);
  };

  return (
    <Container maxWidth={"xl"} className="main">
      <section className="section">
        <div className="section-filter">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              sx={{
                background: "#44ACE9",
                color: "white",
                "&:hover": {
                  bgcolor: "#44ACE9",
                },
                borderRadius: "3px",
              }}
              onClick={() => setOpen(!open)}
            >
              <ListItemText primary="Показать фильтры" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </List>
          <div className="search-main">
            <InputBase
              sx={{
                mr: -2,
                flex: 1,
                border: "1px solid #44ACE9",
                outline: "none",
                borderRadius: "3px",
                padding: "1px 20px",
                width: "600px",
              }}
              placeholder="Поиск....."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Stack spacing={1} direction="row">
              <Button
                sx={{
                  background: "#44ACE9",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#44ACE9" },
                  boxShadow: "none",
                  borderRadius: "0 3px 3px 0",
                }}
                variant="contained"
              >
                Искать
              </Button>
            </Stack>
          </div>
        </div>
        <div className="section-collapse">
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <div className="collapse-home">
              <div className="collapse">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="collapse-correct">
                    <p>Период:</p>
                    <DatePicker
                      className="collapse-input"
                      maxWidth="300px"
                      value={periodOptions}
                      onChange={handlePeriodChange}
                      sx={{ width: "350px" }}
                    />
                  </div>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="collapse-correct">
                    <p>Статусы:</p>
                    <FormControl sx={{ minWidth: 350 }}>
                      <Select
                        multiple
                        value={statusOptions}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        displayEmpty
                        renderValue={(selected) =>
                          selected.length === 0 ? (
                            <em>Все</em>
                          ) : (
                            selected.join(", ")
                          )
                        }
                        inputProps={{ "aria-label": "Without label" }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 200,
                            },
                          },
                        }}
                      >
                        <MenuItem value={1}>
                          <Checkbox checked={statusOptions.includes(1)} />
                          <ListItemText primary="Приём заявок" />
                        </MenuItem>
                        <MenuItem value={2}>
                          <Checkbox checked={statusOptions.includes(2)} />
                          <ListItemText primary="Оценка" />
                        </MenuItem>
                        <MenuItem value={3}>
                          <Checkbox checked={statusOptions.includes(3)} />
                          <ListItemText primary="Закрыто" />
                        </MenuItem>
                        <MenuItem value={4}>
                          <Checkbox checked={statusOptions.includes(4)} />
                          <ListItemText primary="Отменено" />
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </LocalizationProvider>
              </div>
              <div className="collapse">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="collapse-correct">
                    <p>Локация:</p>
                    <FormControl sx={{ minWidth: 350 }}>
                      <Select
                        multiple
                        value={locationOptions}
                        onChange={(e) => handleLocationChange(e.target.value)}
                        displayEmpty
                        renderValue={(selected) =>
                          selected.length === 0 ? (
                            <em>Все</em>
                          ) : (
                            selected.join(", ")
                          )
                        }
                        inputProps={{ "aria-label": "Without label" }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 200,
                            },
                          },
                        }}
                      >
                        <MenuItem value={1}>
                          <Checkbox checked={locationOptions.includes(1)} />
                          <ListItemText primary="Бишкек" />
                        </MenuItem>
                        <MenuItem value={2}>
                          <Checkbox checked={locationOptions.includes(2)} />
                          <ListItemText primary="Ош" />
                        </MenuItem>
                        <MenuItem value={3}>
                          <Checkbox checked={locationOptions.includes(3)} />
                          <ListItemText primary="Чуйская область" />
                        </MenuItem>
                        <MenuItem value={4}>
                          <Checkbox checked={locationOptions.includes(4)} />
                          <ListItemText primary="Ошская область" />
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="collapse-correct">
                    <p>Способ подачи заявок:</p>
                    <FormControl sx={{ minWidth: 350 }}>
                      <Select
                        multiple
                        value={submissionOptions}
                        onChange={(e) => handleSubmissionChange(e.target.value)}
                        displayEmpty
                        renderValue={(selected) =>
                          selected.length === 0 ? (
                            <em>Все</em>
                          ) : (
                            selected.join(", ")
                          )
                        }
                        inputProps={{ "aria-label": "Without label" }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 200,
                            },
                          },
                        }}
                      >
                        <MenuItem value={1}>
                          <Checkbox checked={submissionOptions.includes(1)} />
                          <ListItemText primary="через Tenders.Kg" />
                        </MenuItem>
                        <MenuItem value={2}>
                          <Checkbox checked={submissionOptions.includes(2)} />
                          <ListItemText primary="на фактический адрес" />
                        </MenuItem>
                        <MenuItem value={3}>
                          <Checkbox checked={submissionOptions.includes(3)} />
                          <ListItemText primary="на Email" />
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </LocalizationProvider>
              </div>
              <div className="collapse">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="collapse-correct">
                    <p>Категории:</p>
                    <FormControl sx={{ minWidth: 450 }}>
                      <Select
                        multiple
                        value={categoryOptions}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        displayEmpty
                        renderValue={(selected) =>
                          selected.length === 0 ? (
                            <em>Все</em>
                          ) : (
                            selected.join(", ")
                          )
                        }
                        inputProps={{ "aria-label": "Without label" }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 200,
                            },
                          },
                        }}
                      >
                        <MenuItem value={1}>
                          <Checkbox checked={categoryOptions.includes(1)} />
                          <ListItemText primary="IT-услуги" />
                        </MenuItem>
                        <MenuItem value={2}>
                          <Checkbox checked={categoryOptions.includes(2)} />
                          <ListItemText primary="Автомобили, Авиа-ЖД-Строй спецтехника" />
                        </MenuItem>
                        <MenuItem value={3}>
                          <Checkbox checked={categoryOptions.includes(3)} />
                          <ListItemText primary="Бизнес, финансы, юридические услуги" />
                        </MenuItem>
                        <MenuItem value={4}>
                          <Checkbox checked={categoryOptions.includes(4)} />
                          <ListItemText primary="Вакансия" />
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </LocalizationProvider>
              </div>
            </div>
          </Collapse>
        </div>
      </section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minima
      quis esse sed a perspiciatis quidem labore voluptatem inventore, unde
      nulla facere earum deserunt ea assumenda nemo incidunt expedita. Sed, vero
      voluptates possimus saepe quia itaque non ea dolor? Vel quos totam
      voluptatem vero voluptatibus adipisci unde. Eveniet numquam voluptas dolor
      consequatur iusto commodi soluta voluptatem sunt doloremque veritatis
      atque quaerat quidem, odit ratione voluptate quia dolorum doloribus animi!
      A provident ratione voluptas optio beatae, adipisci quod esse pariatur
      doloremque deleniti sapiente dolorem ducimus cum commodi iste labore quia
      in quam! Eaque id cupiditate libero veritatis, soluta inventore excepturi!
      Earum, culpa quos? Eum blanditiis sit, ab ullam beatae nobis illo, quis
      dolor explicabo possimus impedit repellat quasi, cumque sed rem doloribus
      facere expedita. In, omnis quod. Adipisci doloremque aperiam nesciunt
      unde, ratione iusto impedit, accusantium minus error sint quibusdam sit
      officia quos voluptatem provident porro, facere eligendi labore id animi
      quae! Ab quibusdam mollitia vel nemo sapiente voluptates et rem nobis id
      dolorum facere, beatae dolore, harum error tempora ad dolor voluptate
      vitae dicta ratione! Soluta eos atque perferendis iusto sunt labore,
      aliquam consectetur nobis quo corrupti voluptatem amet dignissimos
      aspernatur asperiores praesentium est architecto saepe provident
      necessitatibus in quibusdam, veniam molestiae porro possimus? Quo porro
      suscipit eius quam animi ex excepturi facere ipsam distinctio, optio earum
      itaque minima repudiandae fugiat voluptate maxime? Nisi non nihil
      perferendis quae at et maiores, eveniet possimus cupiditate, a modi iure
      tenetur exercitationem repellendus ut voluptates sint quaerat? Accusantium
      ullam vitae eius eum tenetur fugit molestias nesciunt soluta. Beatae
      asperiores voluptas qui maxime, molestias, similique cupiditate nihil
      eaque accusantium aperiam vel aliquid expedita cum temporibus corrupti
      minima, dolorem suscipit modi! Maxime mollitia dolorum laborum blanditiis
      molestiae facere beatae in iure sequi vel, quaerat dignissimos minima
      natus reiciendis distinctio accusantium temporibus libero. Optio amet,
      natus nulla sequi neque eligendi unde impedit atque officia non. Maiores,
      suscipit minima autem excepturi atque veritatis molestiae, ipsam ducimus,
      adipisci labore doloremque possimus quod quo accusantium voluptatem est
      sequi. Sequi cum nam numquam error ipsa labore exercitationem dolor est
      voluptates vitae, saepe asperiores veniam, porro, eveniet perferendis enim
      ad. Expedita hic ipsum, sed pariatur excepturi omnis soluta rem autem
      deleniti! Quisquam minus explicabo ratione tempore alias qui omnis
      doloremque vero voluptatum, ut asperiores optio reprehenderit amet culpa
      tenetur assumenda aliquam, velit officia aperiam quibusdam debitis sint
      incidunt eos dignissimos. Fugit, accusamus aperiam! Id sapiente error
      optio unde nisi eveniet eius molestias aperiam eum incidunt aliquid
      corporis doloremque, esse voluptate sunt rem, ad architecto deleniti in
      distinctio, necessitatibus quibusdam iste nobis qui. Cum provident, itaque
      praesentium delectus ab suscipit nostrum veniam cupiditate distinctio, hic
      velit ipsum omnis, possimus est aut. Pariatur, nisi sapiente voluptates
      fuga debitis non molestiae id modi laborum facilis nulla accusantium quis
      eos ipsum. Totam, consectetur ut nihil eum ducimus quia corrupti quo qui,
      illum sapiente veniam. Impedit ducimus laudantium dolor illo qui, quisquam
      molestiae doloremque minima voluptatum neque, possimus temporibus tenetur
      molestias ipsum commodi enim aut! Laudantium ratione ipsam adipisci,
      impedit deserunt quos animi quibusdam aspernatur tenetur accusantium
      consectetur facilis a delectus repudiandae aliquid accusamus? Laboriosam
      error ea explicabo, optio, nisi, fugiat reprehenderit minima nostrum
      beatae cum aperiam ratione. Similique est praesentium aperiam eius.
      Assumenda incidunt ratione rerum minima aliquam. Nihil possimus dolorem
      facilis, ad, ratione molestias perspiciatis debitis nesciunt atque
      repellat quod culpa fugit eius adipisci quis voluptate expedita, ipsa
      sapiente blanditiis voluptatem ab tempore aliquid repudiandae! Facere
      eveniet quasi vitae, provident consequatur saepe minima animi corrupti
      nemo modi recusandae ipsam debitis cum porro minus. Assumenda voluptatum
      possimus soluta, tempore recusandae perferendis! Sit doloribus aliquid sed
      maxime voluptate cum similique accusantium, natus accusamus earum?
      Doloremque aliquam dignissimos minus a nihil consectetur temporibus
      facilis dolor illum similique natus sed doloribus placeat aliquid velit
      perspiciatis esse, pariatur iure, ab nostrum numquam? Voluptatum totam
      dignissimos ab impedit a asperiores tenetur! Quibusdam sed aliquam qui
      libero nam. Consequatur, debitis quae, consequuntur rerum, numquam
      sapiente laborum necessitatibus quas repellendus libero provident omnis.
      Non accusamus odit labore eum illum, magnam quas eveniet nulla earum quam
      consequatur quasi delectus natus eligendi ipsam sint quidem. Quam expedita
      quae, mollitia fugiat ad quasi soluta, nisi commodi quos ex earum
      reprehenderit eius praesentium quisquam omnis laboriosam neque, dolores
      nobis. Deserunt maxime aut perferendis laborum. Explicabo nulla excepturi,
      delectus id repudiandae ut, molestias nobis ullam rem quibusdam facilis
      magnam, eligendi rerum voluptatem. Nam, inventore fugiat distinctio sint
      animi voluptas, vero ducimus eum, consectetur aspernatur quidem eos? Odit
      error quam ut quibusdam at amet placeat tempore consequuntur minima
      delectus iste, hic cupiditate nostrum corporis nesciunt cum quia
      necessitatibus dignissimos aliquid assumenda illum unde autem. Excepturi,
      blanditiis quasi consectetur cumque, beatae voluptate omnis corrupti eos
      accusantium aperiam assumenda saepe, porro vero et illum mollitia
      voluptatem iusto in exercitationem minima ducimus! Ab excepturi optio
      vitae deserunt nobis odit incidunt vero eos, saepe ad ullam, consectetur
      commodi nihil ut architecto nemo. Iusto doloremque cupiditate
      reprehenderit magni? Hic, at, facilis veritatis molestias quia libero quam
      quas eos ab quisquam dolore quaerat saepe harum nam, dolorum officia quasi
      est ea in suscipit ut accusantium. Deleniti minus alias dignissimos quos
      nostrum iusto repellat ipsa vel eligendi, quod exercitationem enim culpa
      deserunt illum quidem quasi aperiam sint quibusdam incidunt cumque
      assumenda officia nulla. Possimus repudiandae quod inventore nihil atque
      facere aliquam est. Modi beatae nemo aspernatur mollitia sint? Nam ipsam
      est vitae ut quasi ratione itaque porro sint similique vero aliquid fugit
      sunt illo, ea ex quis vel. Illum exercitationem quisquam illo, ratione
      suscipit perferendis atque. Ab deserunt nam quisquam deleniti illo ut
      error repellendus quos maxime. Libero aspernatur, omnis quaerat eum
      dolorum neque labore commodi sit vero accusamus ipsum culpa odio vel eius.
      Ex perspiciatis blanditiis laudantium et culpa nisi reiciendis accusamus
      odit vitae doloribus. Ut, ullam! Animi, iusto reiciendis aspernatur
      nostrum porro distinctio, consequuntur esse hic fugit suscipit dolore,
      molestias quisquam. Ipsum assumenda aperiam sapiente nihil! Cum, fugit.
      Natus dolor dignissimos iste delectus fugiat, earum quam vero rem porro
      saepe ab neque dolorum possimus voluptatem placeat iure magnam laborum
      provident eos quo sunt. Sunt neque eveniet unde possimus doloribus placeat
      consequuntur, quam quas.
    </Container>
  );
}

export default Home;
