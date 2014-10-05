import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;

public class EchoClient {

	public final static String IP = "localhost";
	private final String date;
	
	public EchoClient( String DATA )
	{
		this.date = DATA;
	}

	private String handleClient() throws IOException {
		final Socket clientSocket = new Socket( IP, 44012 );
		
		final InputStream IS = clientSocket.getInputStream();
		final OutputStream OS = clientSocket.getOutputStream();
		
		final InputStreamReader inputReader = new InputStreamReader(IS);
		final BufferedReader in = new BufferedReader(inputReader);
		
		final PrintWriter writer = new PrintWriter(OS);
		writer.println(date);
		writer.flush();
		
		String rezultat = in.readLine();
		clientSocket.close();
		return rezultat;
	}
	
	public static void main(String[] args) throws IOException {
		
		System.out.println("Vuvedi data ot tipa: dd/mm/yy");
		
		final InputStream input = System.in;
		final InputStreamReader InputReader = new InputStreamReader(input);
		final BufferedReader reader = new BufferedReader(InputReader);
		
		final String date = reader.readLine();

		final EchoClient echoClient = new EchoClient(date);
		final String otgovor = echoClient.handleClient();
		
		System.out.println(otgovor + " izminali dni  ");
	}
}
