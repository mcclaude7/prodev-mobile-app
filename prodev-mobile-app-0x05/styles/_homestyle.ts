import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchGroup: {
    padding: 16,
    backgroundColor: '#fff',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: '#222',
    fontWeight: '600',
  },
  searchControl: {
    fontSize: 12,
    color: '#717171',
    marginTop: 4,
    padding: 0,
  },
  searchButton: {
    backgroundColor: '#FF385C',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  filterGroup: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 24,
    alignItems: 'center',
    paddingVertical: 12,
  },
  filterContainer: {
    alignItems: 'center',
    gap: 8,
    width: 60,
  },
  listingContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paginationContainer: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  showMoreButton: {
    backgroundColor: '#222',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});