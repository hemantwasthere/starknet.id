import React, { FunctionComponent, useEffect, useState } from "react";
import { fetchSoulbounds } from "../hooks/soulbound";
import styles from "../styles/Soulbound.module.css";
import { MetadataProps, SoulboundProps } from "../types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CDNImg } from "./cdn/image";

const Soulbound: FunctionComponent<SoulboundProps> = (props) => {
  const { inft_id: id, contract } = props;
  const [soulboundData, setSoulboundData] = useState<MetadataProps>();
  const [showInfo, setShowInfo] = useState(false);
  const matches = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    fetchSoulbounds(contract, id).then((data) => {
      let metedataId = String.fromCharCode(data.data[0].slice(-1));
      let dataUri = "";
      data.data[0].slice(0, -1).forEach((c) => {
        dataUri += String.fromCharCode(c);
      });
      const metadataUri =
        dataUri.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") +
        "?id=" +
        metedataId;
      fetch(metadataUri)
        .then((response) => response.json())
        .then((metadata) => {
          setSoulboundData(metadata);
        });
    });
  }, [id, contract]);

  return (
    <div
      className={styles.SbtCard}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <CDNImg
        src={soulboundData?.image.replace(
          "ipfs://",
          "https://gateway.pinata.cloud/ipfs/"
        )}
        alt={soulboundData?.name}
        className={styles.SbtImage}
      />
      {showInfo || matches ? (
        <div className={styles.cardInfo}>
          <h3 className={styles.cardName}>{soulboundData?.name}</h3>
          <p className={styles.cardDescription}>{soulboundData?.desc}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Soulbound;
