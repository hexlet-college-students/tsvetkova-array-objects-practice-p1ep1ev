// task 1(1)
const normalizeData = (content) => {
  const [, ...data] = content.trim().split('\n');
  return data;
};

const getNameCompany = (str) => str.split(';').at(0);
const getDevOfCompany = (str) => str.split(';').at(1);
const getPlaymarketRating = (str) => parseFloat(str.split(';').at(2), 10);
const getAppstoreRating = (str) => parseFloat(str.split(';').at(3), 10);

const averageRating = (str) => (getAppstoreRating(str) + getPlaymarketRating(str)) / 2;

const getListOfRating = (data) => {
  const listOfRating = data.map((str) => averageRating(str));
  return listOfRating;
};

const getMaxAvgRating = (data) => {
  const list = getListOfRating(data);
  const getMaxIndex = list.indexOf(Math.max(...list));
  const name = getNameCompany(data[getMaxIndex]);
  const developer = getDevOfCompany(data[getMaxIndex]);
  return [name, developer];
};

// task 1(2)

const DownlInIndia = (str) => parseInt(str.split(';').at(6), 10);

const getRangeOfDownloads = (data) => {
  const downloads = data.map((str) => DownlInIndia(str));
  return [Math.max(...downloads), Math.min(...downloads)];
};

// task 1(3)

const DownlInAustralia = (str) => parseInt(str.split(';').at(5), 10);

const compare = (a, b) => {
  if (a[0] > b[0]) {
    return -1;
  } if (a[0] === b[0]) {
    return 0;
  }
  return 1;
};

const name1 = (str) => DownlInAustralia(str).sort(compare);
const getThirstThree = (str) => name1(str).slice(0, 3);

// task 1
const tableParsing = (content) => {
  const data = normalizeData(content);
  const [name, developer] = getMaxAvgRating(data);
  const [maxDownl, minDownl] = getRangeOfDownloads(data);
  console.log(`General top messenger: ${name}, Owner: ${developer}`);
  console.log(`Download count: Max count: ${maxDownl}, Min count: ${minDownl}`);
  console.log(getMaxDwnlInAstralia(data));
};

// task 2
const candidateAssessment = (/* content */) => {

};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
