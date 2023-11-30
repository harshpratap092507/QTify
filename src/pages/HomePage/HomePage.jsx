import React from "react";
import { useOutletContext } from "react-router-dom";
import HeroSection from "../../components/HeroSection/Hero";
import Section from "../../components/Section/Section";
import styles from "./homePage.module.css";
import { fetchFilters } from "../../api/api";

function HomePage(props) {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  return (
    <>
      <HeroSection />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="songs"
        />
      </div>
    </>
  );
}

export default HomePage;
