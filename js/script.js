function edit_taplist() {
  document.getElementById("taplist_editor").style.display = "flex"

  document.getElementById("beer_1_name_input").value = localStorage.getItem(
    "stray_gopher_beer_1_name"
  )
  document.getElementById("beer_1_info_input").value = localStorage.getItem(
    "stray_gopher_beer_1_info"
  )
  document.getElementById("beer_1_price_input").value = localStorage.getItem(
    "stray_gopher_beer_1_price")
  document.getElementById("beer_1_size_input").value = localStorage.getItem(
    "stray_gopher_beer_1_size"
  )

  document.getElementById("beer_2_name_input").value = localStorage.getItem(
    "stray_gopher_beer_2_name"
  )
  document.getElementById("beer_2_info_input").value = localStorage.getItem(
    "stray_gopher_beer_2_info"
  )
  document.getElementById("beer_2_price_input").value =
    localStorage.getItem("stray_gopher_beer_2_price")
  document.getElementById("beer_2_size_input").value = localStorage.getItem(
    "stray_gopher_beer_2_size"
  )

  document.getElementById("beer_3_name_input").value = localStorage.getItem(
    "stray_gopher_beer_3_name"
  )
  document.getElementById("beer_3_info_input").value = localStorage.getItem(
    "stray_gopher_beer_3_info"
  )
  document.getElementById("beer_3_price_input").value =
    localStorage.getItem("stray_gopher_beer_3_price")
  document.getElementById("beer_3_size_input").value = localStorage.getItem(
    "stray_gopher_beer_3_size"
  )

  document.getElementById("beer_4_name_input").value = localStorage.getItem(
    "stray_gopher_beer_4_name"
  )
  document.getElementById("beer_4_info_input").value = localStorage.getItem(
    "stray_gopher_beer_4_info"
  )
  document.getElementById("beer_4_price_input").value =
    localStorage.getItem("stray_gopher_beer_4_price")
  document.getElementById("beer_4_size_input").value = localStorage.getItem(
    "stray_gopher_beer_4_size"
  )

  document.getElementById("beer_5_name_input").value = localStorage.getItem(
    "stray_gopher_beer_5_name"
  )
  document.getElementById("beer_5_info_input").value = localStorage.getItem(
    "stray_gopher_beer_5_info"
  )
  document.getElementById("beer_5_price_input").value =
    localStorage.getItem("stray_gopher_beer_5_price")
  document.getElementById("beer_5_size_input").value = localStorage.getItem(
    "stray_gopher_beer_5_size"
  )

  document.getElementById("beer_6_name_input").value = localStorage.getItem(
    "stray_gopher_beer_6_name"
  )
  document.getElementById("beer_6_info_input").value = localStorage.getItem(
    "stray_gopher_beer_6_info"
  )
  document.getElementById("beer_6_price_input").value =
    localStorage.getItem("stray_gopher_beer_6_price")
  document.getElementById("beer_6_size_input").value = localStorage.getItem(
    "stray_gopher_beer_6_size"
  )
}

function save_taplist() {
  document.getElementById("taplist_editor").style.display = "none"

  localStorage.setItem(
    "stray_gopher_beer_1_name",
    document.getElementById("beer_1_name_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_1_info",
    document.getElementById("beer_1_info_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_1_price",
    document.getElementById("beer_1_price_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_1_size",
    document.getElementById("beer_1_size_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_2_name",
    document.getElementById("beer_2_name_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_2_info",
    document.getElementById("beer_2_info_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_2_price",
    document.getElementById("beer_2_price_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_2_size",
    document.getElementById("beer_2_size_input").value
  )

  localStorage.setItem(
    "stray_gopher_beer_3_name",
    document.getElementById("beer_3_name_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_3_info",
    document.getElementById("beer_3_info_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_3_price",
    document.getElementById("beer_3_price_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_3_size",
    document.getElementById("beer_3_size_input").value
  )

  localStorage.setItem(
    "stray_gopher_beer_4_name",
    document.getElementById("beer_4_name_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_4_info",
    document.getElementById("beer_4_info_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_4_price",
    document.getElementById("beer_4_price_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_4_size",
    document.getElementById("beer_4_size_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_5_name",
    document.getElementById("beer_5_name_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_5_info",
    document.getElementById("beer_5_info_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_5_price",
    document.getElementById("beer_5_price_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_5_size",
    document.getElementById("beer_5_size_input").value
  )

  localStorage.setItem(
    "stray_gopher_beer_6_name",
    document.getElementById("beer_6_name_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_6_info",
    document.getElementById("beer_6_info_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_6_price",
    document.getElementById("beer_6_price_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_6_size",
    document.getElementById("beer_6_size_input").value
  )

  localStorage.setItem(
    "stray_gopher_beer_7_name",
    document.getElementById("beer_7_name_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_7_info",
    document.getElementById("beer_7_info_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_7_price",
    document.getElementById("beer_7_price_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_7_size",
    document.getElementById("beer_7_size_input").value
  )

  localStorage.setItem(
    "stray_gopher_beer_8_name",
    document.getElementById("beer_8_name_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_8_info",
    document.getElementById("beer_8_info_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_8_price",
    document.getElementById("beer_8_price_input").value
  )
  localStorage.setItem(
    "stray_gopher_beer_8_size",
    document.getElementById("beer_8_size_input").value
  )
  fill_values()
}

function fill_values() {
  for (let idx = 1; idx <= 8; idx++) {
    const beer_name = localStorage.getItem(`stray_gopher_beer_${idx}_name`)
    const beer_info = localStorage.getItem(`stray_gopher_beer_${idx}_info`)
    const beer_price = localStorage.getItem(`stray_gopher_beer_${idx}_price`)
    const beer_size = localStorage.getItem(`stray_gopher_beer_${idx}_size`)

    document.getElementById(`beer_${idx}_name`).textContent = `${idx}. ${beer_name}`
    document.getElementById(`beer_${idx}_info`).textContent = ` ${beer_info}`
    document.getElementById(`beer_${idx}_price`).textContent = `${beer_price}`
    document.getElementById(`beer_${idx}_size`).textContent = `${beer_size}`
  }
}

fill_values()
document.getElementById("taplist_editor").style.display = "none"
