const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace transition
  content = content.replace(/duration: 1, ease: \[0\.76, 0, 0\.24, 1\]/g, 'duration: 0.8, ease: "easeOut"');
  
  // Replace y: "100%" with y: 40, opacity: 0
  content = content.replace(/initial=\{\{ y: "100%" \}\}/g, 'initial={{ y: 40, opacity: 0 }}');
  
  // Replace whileInView={{ y: "0%" }} with whileInView={{ y: 0, opacity: 1 }}
  content = content.replace(/whileInView=\{\{ y: "0%" \}\}/g, 'whileInView={{ y: 0, opacity: 1 }}');

  // Specific to ReportHeader that might have just y: 40 without opacity inside initial if I do generic
  content = content.replace(/viewport=\{\{ once: true, margin: "-100px" \}\}/g, 'viewport={{ once: true, margin: "-50px" }}');

  fs.writeFileSync(filePath, content);
}
console.log("Done");
