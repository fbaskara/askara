export const isValidHex = function (color) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
  };
  
  export const colorValues = color => {
    if (!color) return;
  
    if (color.toLowerCase() === "transparent") return [0, 0, 0, 0];
  
    if (color[0] === "#") {
      if (color.length < 7) {
        // convert #RGB and #RGBA to #RRGGBB and #RRGGBBAA
        color =
          "#" +
          color[1] +
          color[1] +
          color[2] +
          color[2] +
          color[3] +
          color[3] +
          (color.length > 4 ? color[4] + color[4] : "");
      }
      return [
        parseInt(color.substr(1, 2), 16),
        parseInt(color.substr(3, 2), 16),
        parseInt(color.substr(5, 2), 16),
        color.length > 7 ? parseInt(color.substr(7, 2), 16) / 255 : 1
      ];
    }
    if (color.indexOf("rgb") === -1) {
      // convert named colors
      var temp_elem = document.body.appendChild(document.createElement("fictum")); // intentionally use unknown tag to lower chances of css rule override with !important
      var flag = "rgb(1, 2, 3)"; // this flag tested on chrome 59, ff 53, ie9, ie10, ie11, edge 14
      temp_elem.style.color = flag;
      if (temp_elem.style.color !== flag) return; // color set failed - some monstrous css rule is probably taking over the color of our object
      temp_elem.style.color = color;
      if (temp_elem.style.color === flag || temp_elem.style.color === "") return; // color parse failed
      color = getComputedStyle(temp_elem).color;
      document.body.removeChild(temp_elem);
    }
    if (color.indexOf("rgb") === 0) {
      if (color.indexOf("rgba") === -1) color += ",1"; // convert 'rgb(R,G,B)' to 'rgb(R,G,B)A' which looks awful but will pass the regxep below
      return color.match(/[\.\d]+/g).map(function(a) {
        return +a;
      });
    }
  };
  
  export const getPercentage = (total, value) => {
    return total ? Math.round((value / total * 100) * 100) / 100 : total;
  };
  
  export const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  export const formatMonthDate = (date = '01/01/2021') => {
    const fDate = new Date(date);
  
    return `${getMonthName(fDate.getMonth())} ${fDate.getDate()}`;
  }
  
  export const getMonthName = (monthNumber = 0) => {
    const monthName = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
  
    return monthName[monthNumber]
  }
  
  export const getLongestArrayInObject = (obj) => {
    let temp = []
  
    Object.keys(obj).map((item, index) => {
      temp.push(obj[item])
  
      return null
    });
  
    return temp.sort((a, b) => { return b.length - a.length; })[0]
  }
  
  export const calculatePercentNumberDiff = (number1, number2) => {
    return Math.round((+number1 * 100) / + number2)
  }
  
  export const getPercentDiffDecimal = (percentDiff) => {
    return (100 - percentDiff) / 100
  }