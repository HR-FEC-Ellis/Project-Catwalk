const sortQuestions = (response) => Object.values(response.data).sort((a, b) => b.question_helpfulness - a.question_helpfulness)

const sortAnswers = (data) => Object.values(data).sort((a, b) => b.helpfulness - a.helpfulness);

const filterSearch = (list, query) => list.filter((question) => {
  if (question.question_body.toLowerCase().includes(query.toLowerCase()) ||
    Object.values(question.answers).some((answer) => answer.body.toLowerCase().includes(query.toLowerCase()))
  ) {
    return true
  }
  return false
})

const highlight = (body, query) => body.replace(query, `<mark>${query}</mark>`)

// const filterAnswers = (answers, query) => Object.values(answers).some((answer) => {
//     if (answer.body.toLowerCase().includes(query.toLowerCase())) {
//       answer.body = highlight(answer.body, query)
//       return true
//     }
//     return false
//   })

// const filterSearch = (list, query) => list.filter((question) => {
//     if (question.question_body.toLowerCase().includes(query.toLowerCase())) {
//       question.question_body = highlight(question.question_body, query)
//       if (filterAnswers(question.answers, query)) { return true }
//       return true
//     }
//     if (filterAnswers(question.answers, query)) { return true }
//     return false
//   })

const findPath = (type, id, option) => {
  let path;
  if (option === 'add') {
    if (type === 'answers') {
      path = `/qa/questions/${id}/answers`
    } else {
      path = `/qa/questions/${id}`
    }
  } else {
    if (option === 'report') {
      path = `/qa/${type}/${id}/report`
    } else {
      path = `/qa/${type}/${id}/helpful`
    }
    return path
  }
  return path
}

const dateFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'utc'
}

const setDate = (date) => new Date(date).toLocaleDateString('en-gb', dateFormat)

export default sortQuestions;
export { sortAnswers, filterSearch, findPath, setDate };
