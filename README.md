<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0b1514,100:059669&height=170&section=header&text=Bloom%20Filter%20Lab&fontColor=ecfdf5&fontSize=40" width="100%" alt="Bloom Filter Lab banner"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=900&color=86EFAC&center=true&vCenter=true&width=620&lines=Explore+probabilistic+membership;Understand+false+positives+and+bit+arrays" alt="Animated tagline"/>
<p><strong>A browser playground for Bloom filters and probabilistic membership.</strong></p>
<img src="https://img.shields.io/github/license/CyberLoop-dev/bloom-filter-lab?style=flat-square" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/bloom-filter-lab?style=flat-square" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/bloom-filter-lab?style=flat-square" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/bloom-filter-lab?style=flat-square" alt="Last commit"/>
<br/><img src="./assets/mark.svg" width="90%" alt="Bloom filter bit array illustration"/>
</div>

## 🧭 Overview
Bloom Filter Lab demonstrates a compact probabilistic set. Add values to a bit array, then query membership. A negative answer is definitive; a positive answer may be a false positive.

## ✨ Features
- 🧮 Configure bit-array size and hash count.
- ➕ Insert values and inspect the bits they set.
- 🔎 Query membership with clear “possible” semantics.
- 📈 Estimate the theoretical false-positive probability.
- 🔒 Keep all data in browser memory.

## 🎬 Demo
Start the app. It preloads three sample words; query one of them, then try a new value and observe how the bit array changes.

## 🚀 Quick Start
Requires Node.js 20 or newer.

```bash
npm start
```

Open http://127.0.0.1:4178. Run checks with npm test.

## 🧰 Tech Stack
- 🟢 Node.js built-in HTTP server
- 🌐 Browser JavaScript and typed arrays
- 🧪 Node.js built-in test runner

## 🗂️ Folder Structure
```text
public/       Bloom filter model and interface
test/         Membership behavior tests
assets/       Original SVG artwork
.github/      CI workflow
server.js     Dependency-free static server
```

## 🛣️ Roadmap
- [ ] Add an optimal hash-count calculator.
- [ ] Compare multiple bit-array configurations.
- [ ] Add a side-by-side counting Bloom filter lesson.

## 🤝 Contributing
Contributions are welcome. Preserve the no-false-negative property for inserted values and document the limits of the demonstration hashes.

## 📄 License
MIT. See LICENSE.

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:059669,100:0b1514&height=100&section=footer" width="100%" alt="Animated wave footer"/></div>
