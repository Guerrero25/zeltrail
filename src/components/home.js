import React, { Component } from 'react'

class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="content-area" >
				<section className="page-section no-padding slider">
					<div className="container full-width">

						<div className="main-slider">
							<div className="owl-carousel" id="main-slider">
								<div className="item slide1 ver1">

									<div className="caption">
										<div className="container">
											<div className="div-table">
												<div className="div-cell">
													<div className="caption-content">
														<h2 className="caption-title">All Discounts Just For You</h2>
														<h3 className="caption-subtitle">Find Best Rental Car</h3>
														<div className="row">
															<div className="col-sm-12 col-md-10 col-md-offset-1">

																<div className="form-search dark">
																	<form action="#">
																		<div className="form-title">
																			<i className="fa fa-globe"></i>
																			<h2>Search for Cheap Rental Cars Wherever Your Are</h2>
																		</div>

																		<div className="row row-inputs">
																			<div className="container-fluid">
																				<div className="col-sm-6">
																					<div className="form-group has-icon has-label">
																						<label htmlFor="formSearchUpLocation">Picking Up Location</label>
																						<input type="text" className="form-control" id="formSearchUpLocation" placeholder="Airport or Anywhere" />
																						<span className="form-control-icon"><i className="fa fa-map-marker"></i></span>
																					</div>
																				</div>
																				<div className="col-sm-3">
																					<div className="form-group has-icon has-label">
																						<label htmlFor="formSearchUpDate">Picking Up Date</label>
																						<input type="text" className="form-control datepicker" id="formSearchUpDate" placeholder="dd/mm/yyyy" />
																						<span className="form-control-icon"><i className="fa fa-calendar"></i></span>
																					</div>
																				</div>
																				<div className="col-sm-3">
																					<div className="form-group has-icon has-label selectpicker-wrapper">
																						<label>Picking Up Hour</label>
																						<select
																							className="selectpicker input-price" data-live-search="true" data-width="100%"
																							data-toggle="tooltip" title="Select">
																							<option>20:00 AM</option>
																							<option>21:00 AM</option>
																							<option>22:00 AM</option>
																						</select>
																						<span className="form-control-icon"><i className="fa fa-clock-o"></i></span>
																					</div>
																				</div>
																			</div>
																		</div>

																		<div className="row row-inputs">
																			<div className="container-fluid">
																				<div className="col-sm-6">
																					<div className="form-group has-icon has-label">
																						<label htmlFor="formSearchOffLocation">Dropping Off Location</label>
																						<input type="text" className="form-control" id="formSearchOffLocation" placeholder="Airport or Anywhere" />
																						<span className="form-control-icon"><i className="fa fa-map-marker"></i></span>
																					</div>
																				</div>
																				<div className="col-sm-3">
																					<div className="form-group has-icon has-label">
																						<label htmlFor="formSearchOffDate">Dropping Off Date</label>
																						<input type="text" className="form-control datepicker" id="formSearchOffDate" placeholder="dd/mm/yyyy" />
																						<span className="form-control-icon"><i className="fa fa-calendar"></i></span>
																					</div>
																				</div>
																				<div className="col-sm-3">
																					<div className="form-group has-icon has-label selectpicker-wrapper">
																						<label>Dropping Off Hour</label>
																						<select
																							className="selectpicker input-price" data-live-search="true" data-width="100%"
																							data-toggle="tooltip" title="Select">
																							<option>20:00 AM</option>
																							<option>21:00 AM</option>
																							<option>22:00 AM</option>
																						</select>
																						<span className="form-control-icon"><i className="fa fa-clock-o"></i></span>
																					</div>
																				</div>
																			</div>
																		</div>

																		<div className="row row-submit">
																			<div className="container-fluid">
																				<div className="inner">
																					<i className="fa fa-plus-circle"></i> <a href="#">Advanced Search</a>
																					<button type="submit" id="formSearchSubmit" className="btn btn-submit btn-theme pull-right">Find Car</button>
																				</div>
																			</div>
																		</div>
																	</form>
																</div>

															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>

					</div>
				</section>
			</div>
		)
	}

}

export default Home