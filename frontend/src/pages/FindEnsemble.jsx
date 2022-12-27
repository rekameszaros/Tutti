import { useEffect, useState } from "react";
import Navigation from "../components/navigation/navigation";
import BusinessCard from "../components/shared components/ensembleCards/BusinessCard";
import Footer from "../components/shared components/footer/Footer";
import { transformToArray } from "../components/utils/toArray";
import Select from "react-select";
import styles from "./css-modules/findEnsambles.module.css";
import noResults from "../assets/no-results.svg";
import Button from "../components/shared components/button/button";
import ButtonBorder from "../components/shared components/button/ButtonBorder";

const url = "http://localhost:3005/ensamble";

const FindEnsemble = () => {
  const [ensambles, setEnsambles] = useState([]);
  const [initialEnsambles, setInitialEnsambles] = useState([]);

  const optionsLocation = [
    { value: "frederiksberg", label: "Frederiksberg" },
    { value: "nørrebro", label: "Nørrebro" },
    { value: "østerbro", label: "Østerbro" },
    { value: "nordhavn", label: "Nordhavn" },
    { value: "amager", label: "Amager" },
    { value: "valby", label: "Valby" },
    { value: "vanløse", label: "Vanløse" },
    { value: "brønshøj", label: "brønshøj" },
    { value: "husum", label: "Husum" },
    { value: "lyngby", label: "Lyngby" },
  ];

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((body) => {
        const asArray = transformToArray(body);
        setEnsambles(asArray);
        setInitialEnsambles(asArray);
        console.log(asArray.length);
      });
  }, []);

  async function getAll(event) {
    event.preventDefault();
    setEnsambles(initialEnsambles);
  }

  async function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    const filterBy = {
      filterBy: event.currentTarget.elements.location.value,
    };
    const response = await getFilteredEnsambles(filterBy);
    console.log(response);
  }

  async function getFilteredEnsambles(filter) {
    const response = await fetch(url + "/filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(filter),
    });
    const res = await response.json();
    if (res.statusCode === 201) {
      console.log(res.filteredEnsambles);
      setEnsambles(res.filteredEnsambles);
    }
    return res;
  }

  //   useEffect(() => {
  //     async function getData() {
  //       const response = await fetch(url);
  //       const body = await response.json();
  //     }
  //     getData();
  //   }, []);

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <h2 style={{ color: "#2c2f4b", marginBottom: "1rem" }}>Find the closest ensemble to you</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ width: "60%" }}>
            <label>
              Location
              <Select options={optionsLocation} name="location" id="location" placeholder="Pick the location of the ensamble" />
            </label>
          </div>
          <button type="submit" name="submit" id="submit" value="Submit" style={{ backgroundColor: "#353a5d", borderRadius: "10px" }}>
            Filter
          </button>
          <ButtonBorder text="See all" onClick={getAll} />
        </form>
        {ensambles !== null && ensambles.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap", height: "auto" }}>
            {ensambles.map((ensamble, index) => {
              return (
                <>
                  <div>
                    <BusinessCard key={"ensamble-" + index} ensemble={ensamble} />
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh", rowGap: "1rem" }}>
            <img src={noResults} alt="no results icon" />
            <p style={{ color: "#2c2f4b", fontSize: "1.2rem" }}>There are no ensambles in this area.Pleace search for another one.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FindEnsemble;
