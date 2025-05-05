import GeoJSON from "ol/format/GeoJSON";
import { Feature } from "ol";
import { Vector as VectorSource } from "ol/source";

export async function importFeaturesFromURL(
    url: string,
    vectorSource: VectorSource,
    setFeatures: (features: Feature[]) => void
): Promise<void> {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const geojson = await response.json();

        const format = new GeoJSON();
        const features = format.readFeatures(geojson, {
            featureProjection: "EPSG:3857",
            dataProjection: "EPSG:4326",
        });

        vectorSource.clear();
        vectorSource.addFeatures(features);
        setFeatures(features);
    } catch (err) {
        console.error("Failed to import GeoJSON from URL", err);
        throw err;
    }
}

export function importFeaturesFromGeoJSON(
    file: File,
    vectorSource: VectorSource,
    setFeatures: (features: Feature[]) => void
) {
    const reader = new FileReader();

    reader.onload = (event) => {
        const text = event.target?.result as string;
        try {
            const geojson = JSON.parse(text);
            const format = new GeoJSON();

            const features = format.readFeatures(geojson, {
                featureProjection: "EPSG:3857",
                dataProjection: "EPSG:4326",
            });

            vectorSource.clear();
            vectorSource.addFeatures(features);
            setFeatures(features);
        } catch (err) {
            console.error("Failed to import GeoJSON", err);
            alert("Invalid GeoJSON file.");
        }
    };

    reader.readAsText(file);
}
