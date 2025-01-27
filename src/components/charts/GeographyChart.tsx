import { mockGeographyData as data } from '@/data/mockData';
import { geoFeatures } from '@/data/mockGeoFeatures';
import { colorTokens } from '@/theme';
import { Theme, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';

const GeographyChart = ({ isDashboard = false }: { isDashboard?: boolean }) => {
  const theme: Theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="PuBu"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      value="value"
      valueFormat=".2s"
      projectionType="mercator"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineWidth={0.5}
      graticuleLineColor="#999999"
      borderWidth={1.5}
      borderColor="#ffffff"
      isInteractive={true}
      fillColor="#660000"
      role=""
      onMouseMove={() => {}}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClick={() => {}}
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#ffffff',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : []
      }
    />
  );
};

export default GeographyChart;
