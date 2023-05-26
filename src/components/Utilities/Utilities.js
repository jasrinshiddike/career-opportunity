const loadData = async id => {
    const res = await fetch('jobfeatures.json');
    const data =await res.json()
    const currentJob = data.find(job => job.id === id)
    return currentJob;
}

export default loadData