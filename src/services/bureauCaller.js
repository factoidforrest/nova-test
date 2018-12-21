

const obj = {

  proxy: async (cc, template, encoding, endPoint) => {
    const replacedTemplate = template.replace(/NovaDataCC/g, cc);
    const res = await obj.callBureau(endPoint, replacedTemplate);
    const resText = JSON.stringify(res);
    const cleanedText = resText.replace(new RegExp(cc, 'g'), 'NovaDataCC');
    return JSON.parse(cleanedText);
  },

  callBureau: (endPoint, template) => Promise.resolve({ bureau: 'report' }),

};

module.exports = obj;
