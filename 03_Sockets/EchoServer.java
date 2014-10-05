import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class EchoServer {

	public static final int PORT = 44012;
	
	public static String strToDate( String str ){
		Date d = null;
		SimpleDateFormat df = new SimpleDateFormat("dd/MM/yy");
		
		try {
			d = df.parse(str);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		long razlika = System.currentTimeMillis() - d.getTime();
		long razlikaDni = razlika / (1000 * 60 * 60 * 24);
		
		String rezultat = String.valueOf(razlikaDni);
		return rezultat;		
	}

	public static void handleClient(final Socket clientSocket) throws IOException {
		final InputStream  inputStream = clientSocket.getInputStream();
		final OutputStream outputStream = clientSocket.getOutputStream();
		
		final InputStreamReader reader = new InputStreamReader(inputStream);	
		final BufferedReader in = new BufferedReader(reader);
		
		final PrintWriter izhodenPotok = new PrintWriter(outputStream);
		
		final String line = in.readLine();
	
		String rezultatVDni = strToDate( line );
		
		izhodenPotok.println(rezultatVDni);
		izhodenPotok.flush();
		clientSocket.close();	
	}
	
	public static void run() throws IOException {
		ServerSocket ServerSocket = new ServerSocket( PORT );
		Socket clientSocket = ServerSocket.accept();
		handleClient(clientSocket);
		ServerSocket.close();
	}
	
	public static void main(String[] args) throws IOException {
		run();
	}
}
