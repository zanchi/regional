/**
 * Returns the angle ranges for regions of equal size for a regular polygon
 * These regions can be passed into determineRegion, along with two points,
 * to determine which region the second point is in, in relation to the first.
 *
 * In the example below, we have a triangle, so we would call getRegions(3),
 * this gives us regions 0, 1, and 2.
 *
 * We can then pass that into determineRegion(p1, p2, regions) and it would
 * return region 2
 *                  θmax
 *                 ╱│╲
 *                ╱ │ ╲
 *               ╱  │  ╲
 *              ╱   │   ╲
 *             ╱    │    ╲                     ○ p2
 *            ╱     │     ╲                    │
 *           ╱      │      ╲                   │
 *          ╱       │       ╲                  │
 *     0   ╱        │  θ     ╲ 2               │
 *        ╱      p1 ○_◝_______╲________________│
 *       ╱        ╱   ╲        ╲
 *      ╱      ╱         ╲      ╲
 *     ╱     ╱             ╲     ╲
 *    ╱   ╱                   ╲   ╲
 *   ╱  ╱                       ╲  ╲
 *  ╱_______________________________╲ θmin
 *                 1
 * @param {number} numberOfSides
 * @returns {regions[]}
 */
const getRegions = (numberOfSides) => {
  const regions = [];

  for (let i = 0; i < numberOfSides; i += 1) {
    regions.push({
      max: (i + 1) * ((2 * Math.PI) / numberOfSides),
      min: i * ((2 * Math.PI) / numberOfSides),
    });
  }
  return regions;
};

module.exports = getRegions;
