package com.hsbc;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CovidSurveyData
 */
@WebServlet("/CovidSurveyData")
public class CovidSurveyData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CovidSurveyData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter pw = response.getWriter();
		String name = request.getParameter("name");
		String gender = request.getParameter("gender");
		String age = request.getParameter("age");
		String prefernce = request.getParameter("prefernce");
		pw.print("<html><body>");
		pw.print("<h2>doGet() of FirstServlet</h2>");
		pw.print("<h3>Welcome: "+name+"</h3>");
		pw.print("<h3>Welcome: "+gender+"</h3>");
		pw.print("<h3>Welcome: "+age+"</h3>");
		pw.print("<h3>Welcome: "+prefernce+"</h3>");
		pw.print("</body></html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter pw = response.getWriter();
		String name = request.getParameter("name");
		String gender = request.getParameter("gender");
		String age = request.getParameter("age");
		String prefernce = request.getParameter("prefernce");
		pw.print("<html><body>");
		pw.print("<h2>doGet() of FirstServlet</h2>");
		pw.print("<h3>Welcome: "+name+"</h3>");
		pw.print("<h3>Welcome: "+gender+"</h3>");
		pw.print("<h3>Welcome: "+age+"</h3>");
		pw.print("<h3>Welcome: "+prefernce+"</h3>");
		pw.print("</body></html>");
	}
	

}
