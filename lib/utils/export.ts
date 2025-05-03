import { Feature } from "ol";
import GeoJSON from "ol/format/GeoJSON";

export function exportFeaturesToGeoJSON(features: Feature[], fileName = "map.geojson") {
    const format = new GeoJSON();
    const geojson = format.writeFeatures(features, {
        featureProjection: "EPSG:3857",
        dataProjection: "EPSG:4326",
    });

    const blob = new Blob([geojson], { type: "application/geo+json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
}
